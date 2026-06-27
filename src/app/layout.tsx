import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggler";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Post Meridian",
  description: "Your content creation workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased cursor-pointer`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="fixed top-6 right-6 z-50">
            <AnimatedThemeToggler className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200" />
          </div>
          {children}
        </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
