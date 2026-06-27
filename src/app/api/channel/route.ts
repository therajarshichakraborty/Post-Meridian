import { getInsforgeServerClient } from "@/lib/inforge-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { insforge, userId } = await getInsforgeServerClient();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const filter = request.nextUrl.searchParams.get("filter");

    const [typesRes, userChannelsRes] = await Promise.all([
      insforge.database
        .from("channel_types")
        .select("*")
        .order("created_at", { ascending: true }),
      insforge.database.from("user_channels").select("*").eq("user_id", userId),
    ]);

    if (typesRes.error || userChannelsRes.error) {
      return new NextResponse("Internal Server Error", { status: 500 });
    }

    const userChannelMap = new Map(
      // @ts-ignore
      userChannelsRes.data.map((channel) => [channel.channel_type_id, channel])
    );

    // @ts-ignore
    let channels = (typesRes.data || []).map((channel_type) => {
      const userChannel = userChannelMap.get(channel_type.id);
      return {
        id: channel_type.id,
        type: channel_type.type,
        name: channel_type.name,
        color: channel_type.color,
        character_limit: channel_type.character_limit,
        // @ts-ignore
        user_channel_id: userChannel?.id ?? null, // @ts-ignore
        handle: userChannel?.handle ?? null, // @ts-ignore
        profile_image: userChannel?.profile_image ?? null, // @ts-ignore
        profile_url: userChannel?.profile_url ?? null, // @ts-ignore
        connected: userChannel?.is_connected ?? false,
      };
    });

    const totalChannels = typesRes.data?.length || 0;
    // @ts-ignore
    const connectedCount = channels.filter(
      // @ts-ignore
      (channel) => channel.connected
    ).length;

    if (filter === "connected") {
      // @ts-ignore
      channels = channels.filter((channel) => channel.connected);
    } else if (filter === "unconnected") {
      // @ts-ignore
      channels = channels.filter((channel) => !channel.connected);
    }

    return NextResponse.json({
      channels,
      totalChannels,
      connectedCount,
    });
  } catch (error) {
    console.error("Error fetching channels:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
