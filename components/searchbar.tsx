import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

// Define an interface for the callback function
interface SearchCallback {
  (query: string): void;
}

interface SearchProps {
  onSearch: SearchCallback; 
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('impact');

  return (
    <div>
      <TextField  
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e)=>{setSearchQuery(e.target.value)}}
      />
      <IconButton onClick={ () => {onSearch(searchQuery)}} color="primary">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
