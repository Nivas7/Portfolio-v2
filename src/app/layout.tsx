import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import MotionRoot from "./components/MotionRoot";

export const metadata: Metadata = {
  title: "Srinivas R",
  description: "Srinivas R's portfolio",
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="select-none">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MotionRoot>
            <main id="main">
              <div className="concol">
                {children}
                <Analytics />
              </div>
            </main>
          </MotionRoot>

        </ThemeProvider>
      </body>
    </html>
  );
}
