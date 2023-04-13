"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/legal'>Legal</Link>
        </li>
        <li>
          <Link href='/faq'>FAQ</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}
