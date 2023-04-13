'use client';

import Link from 'next/link';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* some navbar */}
      <head />
      <body className='some-className'>
        <nav className='navbar'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/faq'>FAQ</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
