import type { AppProps } from 'next/app';
import CommonLayout from '@/layouts/common';

// add requireAuth to AppProps
type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};

// _app.tsx
export default function App({ Component, pageProps }: AppPropsWithAuth) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}
