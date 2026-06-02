import { NextResponse } from "next/server";
import { Slot } from "@radix-ui/react-slot";

export async function GET() {
  const info = {
    SlotType: typeof Slot,
    SlotIsFunction: typeof Slot === "function",
    SlotRootType: typeof (Slot as any).Root,
    SlotSlotType: typeof (Slot as any).Slot,
    keys: Slot ? Object.keys(Slot) : [],
  };
  return NextResponse.json(info);
}
