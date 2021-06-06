import axios from "axios";

import Coins from "../components/Coins/Coins/Coins";
import Layout from "../components/Layout/Layout";

import SearchBar from "../components/SearchBar/SearchBar";

export default function Home({ coinList }) {
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" />
        <Coins filteredCoins={coinList} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  // const coinList = await axios.get(

  // );
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );
  const data = await res.json();

  return {
    props: {
      coinList: data,
    },
  };
};
