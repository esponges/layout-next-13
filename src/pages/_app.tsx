import type { AppProps } from 'next/app';
import CommonLayout from '@/components/layouts/common';
import { useEffect, useState } from 'react';
import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  // fix hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}
