import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Currency Tracker</title>
        <meta
          name="description"
          content="Crypto Currency Tracker generated by NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type="text" placeholder="Search" />
    </div>
  );
}
