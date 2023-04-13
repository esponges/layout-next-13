import type { AppProps } from 'next/app';
import CommonLayout from '@/components/layouts/common';
import { useEffect, useState } from 'react';
import '../app/globals.css';

// add requireAuth to AppProps
type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};

// _app.tsx
export default function App({ Component, pageProps }: AppPropsWithAuth) {
  const [isMounted, setIsMounted] = useState(false);

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
