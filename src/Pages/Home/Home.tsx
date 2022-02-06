

import React from 'react';
// components
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
//styled component
import styled from 'styled-components';
// images
// import ImageSelf from '../../assets/image/about-image.png'
const SlideSection = styled.section`
  /* margin-top: 20vh; */
  min-height: 80vh;
  position: relative;
`;
interface arrowProps{
  direction: string,
}
const ArrowDiv = styled.div`
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
  opacity: 0.7;
`
const ImageContainer = styled.div`
width: 50px;
height: 100%;

`
const Image = styled.img`
  
`
const InfoContainer = styled.div`

`
export default function Home() {
  
  return (
  <SlideSection>
    <ArrowDiv direction='left'>
      <ArrowLeftOutlined />
    </ArrowDiv>
    <ImageContainer>
    {/* src={ImageSelf} */}
      <Image />
    </ImageContainer>
    <InfoContainer>

    </InfoContainer>
    <ArrowDiv direction='right'>
      <ArrowRightOutlined style={{color: 'black'}} />
    </ArrowDiv>
  </SlideSection>
  );
}