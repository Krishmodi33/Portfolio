import "./globals.css";

export const metadata = {
  title: "Krish Modi| Software Engineer",
  description: "Krish Modi's personal portfolio website showcasing projects, skills, and experience as a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
