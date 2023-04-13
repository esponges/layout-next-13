'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <html lang='en'>
      {/* some navbar */}
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
