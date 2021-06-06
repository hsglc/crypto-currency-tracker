import axios from "axios";
import { useState }from 'react';
import Coins from "../components/Coins/Coins/Coins";


import SearchBar from "../components/SearchBar/SearchBar";

export default function Home({ coinList }) {
  const [search, setSearch] = useState('');

  const coins = coinList.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  const changeHandler = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  return (
    
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={changeHandler} />
        <Coins filteredCoins={coins} />
      </div>
    
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
