import classes from "./SearchBar.module.css";

function SearchBar({ ...rest }) {
  return (
    <div className={classes.coin_search}>
      <input type="text" className={classes.coin_input} {...rest} />
    </div>
  );
}

export default SearchBar;
