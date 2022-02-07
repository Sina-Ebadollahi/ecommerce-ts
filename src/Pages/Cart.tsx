import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
interface reducersList{
    themeReducer: any,
    authenticationReducer: any,
    cartReducer: any,
    languageReducer: any,
}
const CartSection = styled.section`
min-height: 80vh;
min-width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
const CartContainer = styled.div`
border-radius: 11px;
width:70%;
overflow: hidden;
`
const SideCartWrapper = styled.div`
/* padding: 15rem 5rem; */
    min-height: 50vh;
    width: 100%;
    background-color: #e7e4e4;
    display: flex;
    align-items:center;
    flex-wrap: wrap;
`
interface side{
    side: string
}
const CartSides = styled.div`
    flex: 1 1 20rem;
    width:100%;
    height: 100%;

`
const SubmitButton = styled.button`
    height: 10%;
    width: 100%;
    border: none;
    background-color: #ee7f7f;
    padding: 2rem 0;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
`
// cart products list
const ProductContainer = styled.div`
margin: auto;
overflow: scroll;
    width: 80%;
    min-height: 40vh;
    max-height: 40vh;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
`
const EachProductContainer = styled.div`
margin: auto;
    height: 40%;
    width: 90%;
    
`
const ProductID = styled.h1`
    font-size: 0.8rem;
`
const ProductList = ():JSX.Element => {
    const { cartCount, cartProducts }: { cartCount: number, cartProducts: [] } = useSelector((state: reducersList) => state.cartReducer);
    return(
        <ProductContainer>
            {cartProducts.map((product: any) => {
                return(
                    <EachProductContainer>
                        <ProductID>
                            {product}
                        </ProductID>
                    </EachProductContainer>
                )
            })}
        </ProductContainer>
    )
}
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
export default function Cart(): JSX.Element {
    
    const { cartCount, cartProducts } = useSelector((state: reducersList) => state.cartReducer);
    const currentLang = useSelector((state: reducersList) => state.languageReducer);
  return (
      <CartSection>
        <CartContainer>
            <SideCartWrapper>
            <CartSides>
                <ProductList />
            </CartSides>
            <CartSides>

            </CartSides>
            </SideCartWrapper>
            <SubmitButton>
                {checkLang(currentLang, "Confirm The Products", "تایید محصولات")}
            </SubmitButton>
        </CartContainer>
      </CartSection>
  );
}
