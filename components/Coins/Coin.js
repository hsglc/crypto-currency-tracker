import classes from "./Coin.module.css";

function Coins({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) {
  return (
    <div className={classes.coin_container}>
      <div className={classes.coin_row}>
        <div className="coin">
          <img src={image} alt={name} className={classes.coin_img} />
          <h1 className={classes.coin_h1}>{name}</h1>
          <p className={classes.coin_symbol}>{symbol}</p>
        </div>
        <div className={classes.coin_data}>
          <p className={classes.coin_price}>${price}</p>
          <p className={classes.coin_volume}>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className={(classes.coin_percent, classes.red)}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={(classes.coin_percent, classes.green)}>
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className={classes.coin_marketcap}>
            Market Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coins;
