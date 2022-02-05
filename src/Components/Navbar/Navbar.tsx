import React, { useState } from 'react';
import styled from 'styled-components'
import { SearchOutlined } from '@material-ui/icons'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavContainer = styled.div`
  width: 100vw;
  min-height: 15vh;
`;
// Container with margin
const NavWrapper = styled.div`
  width: 94%;
  min-height: 15vh;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
// Navbar left side(Search + Language)
const LeftContainer = styled.div`
height: 100%;
width: 100%;
  flex: 1 1 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

`;
const SearchContainer = styled.div`
  width: 40%;
  padding: 0.5rem 0;
  height: 100%;
  display: flex;
  align-items: center;
  border: 0.5px solid rgb(139, 138, 139);
  margin-left: 0.5rem;
  justify-self: flex-start;
  `

  const Language = styled.span`
    font-size: 1rem;
    margin-right: 0.5rem;
  
  `
  const SearchInput = styled.input`
  border: none;
  width: 85%;
  height: 100%;
  margin-left: 1rem;
  font-size: 1.3rem;
  `
  // Navbar Center (Logo)
const CenterContainer = styled.div`
flex: 1 1 20rem;
  font-family: 'Comforter, cursive';
`;
const Logo = styled.h1`
  font-size: 3.5rem;
  font-family: 'Dancing Script', cursive;
  /* display: inline; */
  text-align: center;
`;
// Navbar Right( Login Link + Signup Link + checkout badge)
const RightContainer = styled.div`
flex: 1 1 20rem;
display: flex;
justify-content: flex-end;
`;
const RightUL = styled.ul`
/* margin-left: 40%; */
width: 60%;
justify-self: flex-end;
  display: flex;
  justify-content: space-around;
  align-items: center;

`
const BasketContainer = styled.div`
width: 2rem;
height: 2rem;
  position: relative;
  display: flex;
  align-items: flex-end;
`
const CartCount = styled.div`
position: absolute;
top: 0;
right: 0;
width: 0.8rem;
  border-radius: 50%;
  background-color: blue;
  color: white;
  align-items: center;
  text-align: center;
`


// Language Options
const langOptions = [
  {value: 'english', label: 'EN'},
  {value: 'persian', label: 'FA'},
]
function checkLang(currentLang: string | undefined, engText: string, faText: string): string | undefined{
  switch(currentLang){
    case 'english':
      return engText;
    case 'persian':
      return faText;
      default:
        return undefined;
  }
}
export default function Navbar(): JSX.Element {
  const [langState, setLangState] = useState<string | undefined>('english');
  const [cartCount, setCartCount] = useState<number | null>(null)
  console.log(langState);
  return (
    <NavContainer>
      <NavWrapper>
        <LeftContainer>
          <Select onChange={(value) => setLangState(value?.value)} defaultValue={{value: 'english', label: 'EN'}} backspaceRemovesValue blurInputOnSelect options={langOptions} />
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <SearchInput style={{outline: 'none',textAlign: langState === 'english' ? 'left' : 'right'}} placeholder={checkLang(langState, 'Search...', '...جستجو')} />
            <SearchOutlined />
          </SearchContainer>
        </LeftContainer>
        <CenterContainer><Logo>{checkLang(langState, 'eCommerce', 'فروشگاه')}</Logo></CenterContainer>
        <RightContainer>
          <RightUL>
            <li><Link to="/Signup">{checkLang(langState, 'REGISTER', 'ایجاد حساب')}</Link></li>
            <li><Link to="/Login">{checkLang(langState, 'SIGN IN', 'ورود')}</Link></li>
            <li>
              <BasketContainer>
                {cartCount && <CartCount>{cartCount}</CartCount>}
                <Link to="/Cart"><ShoppingCartIcon  /></Link>
              </BasketContainer>
            </li>
          </RightUL>
        </RightContainer>
      </NavWrapper>
    </NavContainer>
    );
}
