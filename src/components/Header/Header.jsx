import Search from '../Search/Search';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import { ContainerHeader, HeaderBox, Logo } from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <ContainerHeader>
        <Logo>Event Planner</Logo>
        <SelectLanguage />
        <Search />
      </ContainerHeader>
    </HeaderBox>
  );
};

export default Header;
