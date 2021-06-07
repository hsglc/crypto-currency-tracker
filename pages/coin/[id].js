import classes from './Coin.module.css'
import axios from "axios";


function Coin({ coin }) {
  return (
    <div className={classes.coin_page}>
      <div className={classes.coin_container}>
        <img src={coin.image.large} alt={coin.name} className={classes.coin_image}/>
        <h1 className={classes.coin_name}>{coin.name}</h1>
        <p className={classes.coin_ticker}>{coin.symbol}</p>
        <p className={classes.coin_current}>${coin.market_data.current_price.usd}</p>
      </div>
    </div>
  );
}

export default Coin;

export const getServerSideProps = async (ctx) => {
    const {id} = ctx.query;

    const res = await axios(`https://api.coingecko.com/api/v3/coins/${id}`)

    const coinData = res.data;

    return {
        props : {
            coin: coinData,
        }
    }
}
