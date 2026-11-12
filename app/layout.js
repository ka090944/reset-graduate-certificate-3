
import "./globals.css";

export const metadata = {
  title: "RESET | Digital Graduation Certificate",
  description: "RESET Digital Graduation Certificate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
