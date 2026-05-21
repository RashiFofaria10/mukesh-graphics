import "./globals.css";

export const metadata = {
  title: "Mukesh Graphics",
  description: "Premium Printing & Packaging Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
