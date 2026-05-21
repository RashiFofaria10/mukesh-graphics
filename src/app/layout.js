import "./globals.css";

export const metadata = {
  title: "Mukesh Graphics",
  description: "Luxury Printing & Packaging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
