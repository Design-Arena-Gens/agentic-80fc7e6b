export const metadata = {
  title: "Arena",
  description: "Hi Arena - deployed on Vercel"
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
