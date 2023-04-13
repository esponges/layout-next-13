import Navbar from "./navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* some navbar */}
      <head />
      <body className='p-10'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
