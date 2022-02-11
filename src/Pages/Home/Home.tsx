

import React, { useState } from 'react';
// components
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
//styled component
import styled from 'styled-components';
// images
import Image1 from '../../assets/image/about-image.png'
import Image2 from '../../assets/image/contact-image.jpg'
import Image3 from '../../assets/image/gallery-3.jpg'
import Image4 from '../../assets/image/gallery-4.jpg'
// clothes images
import ClothesImage1 from '../../assets/image/clothes1.jpg'
import ClothesImage2 from '../../assets/image/clothes2.jpg'
import ClothesImage3 from '../../assets/image/clothes3.jfif'
import ClothesImage4 from '../../assets/image/clothes4.jfif'
import ClothesImage5 from '../../assets/image/clothes5.jfif'
import ClothesImage6 from '../../assets/image/clothes6.jfif'
import ClothesImage7 from '../../assets/image/clothes7.jfif'
import ClothesImage8 from '../../assets/image/clothes8.jfif'
import { useSelector } from 'react-redux';
import useCart from '../../hooks/useCart';
import Rotate from 'react-reveal/Rotate';
const SlideSection = styled.section`
  /* margin-top: 20vh; */
  min-height: 80vh;
  /* max-height: 60vh; */
  position: relative;
  `;
const Wrapper = styled.div`
overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  animation: slide 1s forwards ease-in;
  @keyframes slide {
    from{
      opacity: 0.3;
      transform: translateX(50vw);
    }
    to{
      opacity: 1;
      transform: translateX(0);
    }
  }
  `
interface arrowProps{
  direction: string,
}
const ArrowDiv = styled.div`
z-index: 4;
height: 10%;
width: 5%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: arrowProps) => props.direction === 'left' && ('0.8rem')};
  right: ${(props: arrowProps) => props.direction === 'right' && ('0.8rem')};
  margin: auto;
  cursor: pointer;
  background-color: #fff;
  opacity: 0.4;
`
const ImageContainer = styled.div`
width: 100%;
height: 100%;
flex: 1 1 20rem;
`
const Image = styled.img`
max-height: 80vh;
width: 100%;
  height: 100%;
  object-fit: cover;
`
const InfoContainer = styled.div`
width: 100%;
height: 100%;
flex: 1 1 20rem;
`
const InfoWrapper = styled.div`
padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const InfoHeader = styled.h1`
margin-bottom: 4rem;
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 1rem;

`
const InfoParagraph = styled.p`
padding-left: 2rem;
margin-bottom: 6rem;
width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
`
const InfoButton = styled.button`
width: 100%;
justify-self: left;
border: none;
  padding: 1.5rem 4rem;
  background-color: #dae791;
  color: #383535;
  font-size: 1.5rem;
  cursor: pointer;

`
/*
  Second Section
*/
const CategoriesSection = styled.section`
  min-height: 100vh;
  min-width:100vw;
  /* display: flex;
  flex-direction: column;
  flex-wrap:  wrap; */
`
const ProductIntro = styled.div`
background-color: #eceaea;
width: 90vw;
min-height: 50vh;
margin: auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
`
const EachProductIntro = styled.div`
overflow: hidden;
margin-top: 8%;
  min-width: 25vw;
  height: 90%;
  border: 3px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.4);
`
const EachProductIntroImage = styled.img`
  min-height: 80%;
  max-height: 80%;
  width: 100%;
  object-fit: cover;
  border-bottom: 2px solid #312f2f;
`
const EachProductIntroButton = styled.button`
all: unset;
  width: 100%;
  height: 20%;
  cursor: pointer;
  background-color: #bcf177;
  color: #000;
  font-size: calc(1rem + 1vw);
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5rem;
`
/*
  Sale Product List Section
*/
const SaleProduct = styled.section`
  min-height: 70vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SaleProductContainer = styled.div`
  min-width: 90vw;
  min-height: 60vh;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1rem;
`
const SaleProductEach = styled.div`
position: relative;
  width: 90%;
  height: 90%;
  position: relative;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
  margin: auto;
  cursor: pointer;
`
const SaleProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const SaleProductHoverDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #d4d0d0;
`
const clothesImages = [
  {image: ClothesImage1, id: 1},
  {image: ClothesImage2, id: 2},
  {image: ClothesImage3, id: 3},
  {image: ClothesImage4, id: 4},
  {image: ClothesImage5, id: 5},
  {image: ClothesImage6, id: 6},
  {image: ClothesImage7, id: 7},
  {image: ClothesImage8, id: 8},
]
const EachProductSaleFunction = ({ prop, hoverProp, setHoverProp }: {prop: {image: any, id: number}, hoverProp: {isHovered: boolean, isHoveredId: number}, setHoverProp: React.Dispatch<React.SetStateAction<{isHovered: boolean;isHoveredId: number;}>> }): JSX.Element => {
  let iconStyle: React.CSSProperties = {
    backgroundColor: 'black', width: '4rem',height: '4rem', borderRadius: '50%',margin: '2rem', color: 'white'
  }
  const { handleCartIncrement } = useCart();
  return(
    <SaleProductEach onMouseEnter={(e) => setHoverProp({isHovered: true, isHoveredId: prop.id})} onMouseLeave={(e) => setHoverProp({isHovered: false, isHoveredId: 0})}>
      {hoverProp.isHovered && hoverProp.isHoveredId === prop.id && (
        <SaleProductHoverDiv>
          <FavoriteBorderIcon style={iconStyle} />
          <AddShoppingCartIcon onClick={() => handleCartIncrement(313131)} style={iconStyle}/>
          <ZoomInIcon style={iconStyle}/>
        </SaleProductHoverDiv>
      )}
      <SaleProductImage src={prop.image} />
    </SaleProductEach>
  )
}
const SaleProductSection = (props: any): JSX.Element => {
  const [hoverProp, setHoverProp] = useState<{isHovered: boolean, isHoveredId: number}>({isHovered: false, isHoveredId: 0 })
  return(
    <SaleProduct>
      <SaleProductContainer>
      {clothesImages && clothesImages.map((each) => {
        return(
          <>
            <EachProductSaleFunction prop={each} hoverProp={hoverProp} setHoverProp={setHoverProp} />
          </>
        )
      })}
      </SaleProductContainer>
    </SaleProduct>
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
const data = [
  {
    id: Math.floor(Math.random() * 1000),
    imageSrc: Image4,
    headerEn: 'SUMMER SALE!',
    headerFa: "جشنواره تابستانه!",
    paraEn: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF\n FOR NEW ARRIVALS.",
    paraFa: "این فرصت تخفیف 30% را از دست ندهید\n برای افراد جدید",
    btnEn: "Shop Now ",
    btnFa: "خرید",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imageSrc: Image2,
    headerEn: 'SUMMER SALE!',
    headerFa: "جشنواره تابستانه!",
    paraEn: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF\n FOR NEW ARRIVALS.",
    paraFa: "این فرصت تخفیف 30% را از دست ندهید\n برای افراد جدید",
    btnEn: "Shop Now ",
    btnFa: "خرید",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imageSrc: Image3,
    headerEn: 'SUMMER SALE!',
    headerFa: "جشنواره تابستانه!",
    paraEn: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF\n FOR NEW ARRIVALS.",
    paraFa: "این فرصت تخفیف 30% را از دست ندهید\n برای افراد جدید",
    btnEn: "Shop Now ",
    btnFa: "خرید",
  },
  {
    id: Math.floor(Math.random() * 1000),
    imageSrc: Image1,
    headerEn: 'SUMMER SALE!',
    headerFa: "جشنواره تابستانه!",
    paraEn: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF\n FOR NEW ARRIVALS.",
    paraFa: "این فرصت تخفیف 30% را از دست ندهید\n برای افراد جدید",
    btnEn: "Shop Now ",
    btnFa: "خرید",
  },
  
]
function checkSlideNumber(num: number, nextNum: React.Dispatch<React.SetStateAction<number>>, direction: string){
  if(num === 3 && direction === 'right'){
    return;
  }else if(num > 0 && num <= 3 && direction === 'left'){
    nextNum(num - 1);
  }else if(num >= 0 && num < 3 && direction === 'right'){
    nextNum(num + 1)
  }else{
    return;
  }
}
export default function Home() {
  const [sliderNumber, setSliderNumber] = useState<number>(0);
  interface reducers{
    themeReducer: any,
    authenticationReducer: any,
    cartReducer: any,
    languageReducer: any,
  }
  const currentLang = useSelector((state: reducers) => state.languageReducer);
  const { handleCartIncrement } = useCart();
  return (
    <>
    <SlideSection>
      <ArrowDiv direction='left' onClick={(e) => checkSlideNumber(sliderNumber, setSliderNumber, 'left')}>
        <ArrowLeftOutlined />
      </ArrowDiv>
      <Wrapper>
        {/* <Roll right> */}
              <ImageContainer>
                <Image src={data[sliderNumber].imageSrc}/>
              </ImageContainer>
              <InfoContainer>
                <InfoWrapper>
                  <InfoHeader>
                    {checkLang(currentLang, data[sliderNumber].headerEn, data[sliderNumber].headerFa)}
                  </InfoHeader>
                  <InfoParagraph>
                    {checkLang(currentLang, data[sliderNumber].paraEn, data[sliderNumber].paraFa)}
                  </InfoParagraph>
                  <InfoButton onClick={(e) => handleCartIncrement(data[sliderNumber].id)}> 
                    {checkLang(currentLang, data[sliderNumber].btnEn, data[sliderNumber].btnFa)}
                  </InfoButton>
                </InfoWrapper>
              </InfoContainer>
        {/* </Roll> */}
      </Wrapper>
      <ArrowDiv direction='right' onClick={(e) => checkSlideNumber(sliderNumber, setSliderNumber, 'right')}>
        <ArrowRightOutlined style={{color: 'black'}} />
      </ArrowDiv>
    </SlideSection>
    <CategoriesSection>
        <Rotate bottom left>
      <ProductIntro>

        {data.map((each) => {
          if(!(each === data[3])){
            return(
              <EachProductIntro key={each.id}>
                <EachProductIntroImage src={each.imageSrc} />
                <EachProductIntroButton onClick={() => handleCartIncrement(each.id)}>{checkLang(currentLang, each.btnEn, each.btnFa)}</EachProductIntroButton>
              </EachProductIntro>
            )
          }
        })}
      </ProductIntro>
        </Rotate>
    </CategoriesSection>
    <SaleProductSection>

    </SaleProductSection>
  </>
  );
}