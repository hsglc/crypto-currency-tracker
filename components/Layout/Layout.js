import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function Layout({ children, title = "Crypto Currency Tracker" }) {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/public/favico.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <Image
              height={150}
              width={200}
              src="/crypto.jpg"
              alt="coin-logo"
              
            />
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
