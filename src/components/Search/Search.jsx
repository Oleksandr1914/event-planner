import { useState } from 'react';
import { SearchInput, SearchBox } from './Search.styled';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <SearchBox>
      <SearchInput
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by keywords"
      />
    </SearchBox>
  );
};

export default Search;
