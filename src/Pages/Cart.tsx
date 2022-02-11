import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// components
import CloseIcon from '@mui/icons-material/Close';
import useCart from '../hooks/useCart';
import Select from 'react-select'
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
    display: ${(prop: side) => prop.side === 'right' && 'flex'};
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
    height: 100%;
    width: 90%;
    border: 1px solid green;
    position: relative;
    
`
const ProductID = styled.h1`
    font-size: 0.8rem;
    text-align: center;
    font-size: 1rem;
`
const EachProductContainerBottomContainer = styled.div`
    width: 100%;
    /* height: 100%; */
    display:flex;
    flex-wrap: wrap;
`
const EachProductContainerBottomContainerSides = styled.div`
    flex: 1 1 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EachProductQuantityInputLabel = styled.label`
    
`
const EachProductQuantityInputSpan = styled.span`
    
`
const EachProductQuantityInput = styled.input`
    width: 4rem;
`
const ProductList = ({ cartCount, cartProducts, currentLang, handleCartDecrement }: { cartCount: number, cartProducts: [], currentLang: string, handleCartDecrement: (productID: number) => void }):JSX.Element => {
    return(
        <ProductContainer>
            {cartProducts.map((product: any) => {
                return(
                    <EachProductContainer>
                        <ProductID>
                            {product}
                        </ProductID>
                        <CloseIcon onClick={(e) => handleCartDecrement(product)} style={{color: 'black', cursor: 'pointer'}} />
                        <EachProductContainerBottomContainer>
                            <EachProductContainerBottomContainerSides>
                                {checkLang(currentLang, 'Product Name :', 'نام محصول : ')} {product.name && product.name}
                            </EachProductContainerBottomContainerSides>
                        <EachProductContainerBottomContainerSides>
                                <EachProductQuantityInputLabel>
                                    <EachProductQuantityInputSpan>
                                        {checkLang(currentLang, 'Quantity : ', 'تعداد : ')}
                                    </EachProductQuantityInputSpan>
                                <EachProductQuantityInput defaultValue={1} type="number" />
                                </EachProductQuantityInputLabel>
                            </EachProductContainerBottomContainerSides>
                        </EachProductContainerBottomContainer>
                    </EachProductContainer>
                )
            })}
        </ProductContainer>
    )
}
const PaymentSides = styled.div`
    width: 100%;
    height: 50%;

`
// Payment Side 1
const PaymentSideHeader = styled.h1`
    font-size: 3rem;
    color: #3d3838;
`

// Payment Side 2
const OffCouponLabel = styled.label`
    
`
const OffCouponSpan = styled.span`
    
`
const OffCouponInput = styled.input`

`
const PaymentList = ():JSX.Element => {
    const [paymentMethod, setPaymentMethod] = useState<string | undefined>();
    const [couponArea, setCouponArea] = useState<string | number | undefined>();
    return(
        <>
        <PaymentSides>

        </PaymentSides>
        <PaymentSides>
            <Select onChange={(newValue) => setPaymentMethod(newValue.value)} defaultValue={{value: 'paypal', label: 'paypal'}} options={[
                {value: 'paypal', label: 'paypal'},
                {value: 'skrill', label: 'skrill'},
                {value: 'bitcoin', label: 'bitcoin'},
            ]} />
            <OffCouponLabel>
                <OffCouponSpan>Coupon : </OffCouponSpan>
                <OffCouponInput onChange={(e) => setCouponArea(e.target.value)} />
            </OffCouponLabel>
        </PaymentSides>
        </>
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
    const { handleCartDecrement } = useCart();
  return (
      <CartSection>
        <CartContainer>
            <SideCartWrapper>
            <CartSides side='left'>
                <ProductList cartCount={cartCount} cartProducts={cartProducts} currentLang={currentLang} handleCartDecrement={handleCartDecrement}/>
            </CartSides>
            <CartSides side='right'>
                <PaymentList />
            </CartSides>
            </SideCartWrapper>
            <SubmitButton>
                {checkLang(currentLang, "Confirm The Products", "تایید محصولات")}
            </SubmitButton>
        </CartContainer>
      </CartSection>
  );
}
