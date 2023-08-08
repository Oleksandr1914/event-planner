import { SearchInput, SearchBox } from './Search.styled';
import { useSearch } from '../../store';

const Search = () => {
  const editSearch = useSearch(state => state.editSearch);
  const search = useSearch(state => state.search);

  return (
    <SearchBox>
      <SearchInput
        type="text"
        value={search}
        onChange={e => editSearch(e.target.value)}
        placeholder="Search by keywords"
      />
    </SearchBox>
  );
};

export default Search;
