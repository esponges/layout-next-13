"use client"

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="some-className">{children}</body>
    </html>
  )
}
