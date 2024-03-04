import { Box } from "@mui/material";

const Searchbar = ({ setKeyword,searchSubmitHandler }) => {
  return (
    <Box>
      <form onSubmit={searchSubmitHandler} className="searchFrom">
        <Searchbar setKeyword={setKeyword} />
        
        <input className="searchBtn" type="submit" value="Search" />
      </form>
    </Box>
  );
};

export default Searchbar;
