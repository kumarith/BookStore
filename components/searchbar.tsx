import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

// Define an interface for the callback function
interface SearchCallback {
  (query: string): void;
}

interface SearchProps {
  onSearch: SearchCallback; 
  //initialValue : string;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {

const [searchQuery, setSearchQuery] = useState<string>("");

const onChangeQuery = (qry:string ) => {
  onSearch(qry);
  setSearchQuery(qry);
}

  return (
    <div>
      <TextField  
        label="Search for titles"
        variant="outlined"
        value={searchQuery}
        style={{ width:"700px", padding:"1px"}}
        //onChange={(e)=>{setSearchQuery(e.target.value)}}
        onChange={(e)=>{onChangeQuery(e.target.value)}}
        //onLoad={(e)=>{onChangeQuery(e.target.value)}}
       
        inputProps={{
          /*startAdornment: (
            <SearchIcon style={{ color: 'blue' }} />
          ), */
          style: {
            padding: "6px"
          }
        }}
      />
      <Button variant='outlined'  onClick={ () => {onSearch(searchQuery)}} color="primary">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
