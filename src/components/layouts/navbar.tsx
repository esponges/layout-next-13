"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link className='text-red-500' href='/'>Home</Link>
        </li>
        <li>
          <Link className='text-blue-500' href='/legal'>Legal</Link>
        </li>
        <li>
          <Link className='text-green-500' href='/faq'>FAQ</Link>
        </li>
        <li>
          <Link className='text-pink-500' href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}
