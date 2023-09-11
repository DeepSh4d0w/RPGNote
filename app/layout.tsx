export const metadata = {
  title: "RPGNote | Cosmux",
  description: "acompanhe as mesas disponíveis",
};

import "styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
