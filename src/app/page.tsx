import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import Login from "~/Login";

interface AppProps {
  pageProps?: {
    session?: Session | null;
    [key: string]: any;
  };
}

export default function App({ pageProps = {} }: AppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Login {...restPageProps} />
    </SessionProvider>
  );
}