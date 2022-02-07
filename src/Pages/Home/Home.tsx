

import React, { useState } from 'react';
// components
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
//styled component
import styled from 'styled-components';
// images
import Image1 from '../../assets/image/about-image.png'
import Image2 from '../../assets/image/contact-image.jpg'
import Image3 from '../../assets/image/gallery-3.jpg'
import Image4 from '../../assets/image/gallery-4.jpg'

import { useSelector } from 'react-redux';
import useCart from '../../hooks/useCart';
import Roll from 'react-reveal/Roll';
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
    imageSrc: Image1,
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
    imageSrc: Image4,
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
                  {checkLang(currentLang, data[sliderNumber].headerEn, data[sliderNumber].btnFa)}
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
  );
}