import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Wallet Project",
  description: "Crypto wallet showcase project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
