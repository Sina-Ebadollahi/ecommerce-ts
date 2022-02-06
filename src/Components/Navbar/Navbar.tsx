import React, { Reducer, useState } from 'react';
import styled from 'styled-components'
import { SearchOutlined } from '@material-ui/icons'
import Select from 'react-select';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const NavContainer = styled.div`
  width: 100vw;
  min-height: 15vh;
  box-shadow: 0 1px 2px black;
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
  color: black !important;
  /* display: inline; */
  text-align: center;
  cursor: pointer;
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
  interface x {
    themeReducer: any,
   authenticationReducer: any,
   cartReducer: any,
   languageReducer: any,
  }
  const currentLang = useSelector((state: x) => state.languageReducer);
  const cartCount = useSelector((state: x) => state.cartReducer);
  const dispatch = useDispatch();
  // const { 
  //   cartCount,
  //   currentLang,
  //   themeStatus,
  //   setCurrentLang,
  //   setThemeStatus,
  //   setCartCount,
  //   dispatch,} = useGlobalContext();
  // const [langState, setLangState] = useState<string | undefined>('english');
  // const {} = useReduxReducers();
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const localHref = useLocation();
  
  function handleSearchSubmit(searchValue: string){
    // search
  }
  return (
    <NavContainer>
      <NavWrapper>
        <LeftContainer>
          <Select onChange={(value) => dispatch({type: 'CHANGE_LANG', payload: value.value})} defaultValue={{value: 'english', label: 'EN'}} backspaceRemovesValue blurInputOnSelect options={langOptions} />
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <SearchInput onChange={e => setSearchValue(e.target.value)} onKeyDown={(e) => {if(e.key === 'Enter'){handleSearchSubmit(searchValue)}}} style={{outline: 'none',textAlign: currentLang === 'english' ? 'left' : 'right'}} placeholder={checkLang(currentLang, 'Search...', '...جستجو')} />
            <SearchOutlined />
          </SearchContainer>
        </LeftContainer>
        <CenterContainer><Link to={'/'}><Logo>{checkLang(currentLang, 'eCommerce', 'فروشگاه')}</Logo></Link></CenterContainer>
        <RightContainer>
          <RightUL >
            {!localHref.pathname.endsWith('Signup') && (<li><Link style={{color: 'black'}} to="/Signup">{checkLang(currentLang, 'REGISTER', 'ایجاد حساب')}</Link></li>)}
            {!localHref.pathname.endsWith('Login') && (<li><Link style={{color: 'black'}} to="/Login">{checkLang(currentLang, 'SIGN IN', 'ورود')}</Link></li>)}
            <li>
              <BasketContainer>
                {/* {cartCount && <CartCount>{cartCount}</CartCount>} */}
                <Link to="/Cart"><ShoppingCartIcon style={{color: 'black'}} /></Link>
              </BasketContainer>
            </li>
          </RightUL>
        </RightContainer>
      </NavWrapper>
    </NavContainer>
    );
}
