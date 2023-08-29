import "./globals.css";

export const metadata = {
  title: "Dev Updates",
  description:
    "Showcase and discover remarkable developer projects and Tutorial guides",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
