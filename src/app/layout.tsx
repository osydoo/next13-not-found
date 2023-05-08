export const metadata = {
  title: 'Not Found Case Test',
  description: 'Not Found Case Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
