import classes from "./SearchBar.module.css";

function SearchBar({ ...rest }) {
  return (
    <form>
      <label className={classes.coin_search}>
        <input type="text" className={classes.coin_input} {...rest} />
      </label>
    </form>
  );
}

export default SearchBar;
