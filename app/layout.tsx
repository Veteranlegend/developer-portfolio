import "./globals.css";
import NetworkBackground from "@/components/NetworkBackground";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Ahmad El Haj",
  description: "Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-black text-white">
        <NetworkBackground />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}