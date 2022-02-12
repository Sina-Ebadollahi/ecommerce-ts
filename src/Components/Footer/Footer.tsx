import React from 'react'
import styled from 'styled-components'
//routing
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
const FooterStyled = styled.footer`
    min-height: 40vh;
    min-width: 100vw;
    background-color: #ddd8d8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;    
`
// links array
let linksArray1 = [
    {link: '/', labelEn: 'Home', labelFa: 'خانه'},
    {link: '/', labelEn: 'Man Fashion', labelFa: 'مد مرد'},
    {link: '/', labelEn: 'Accessories', labelFa: 'آینه و کنسول'},
    {link: '/', labelEn: 'Order Tracking', labelFa: 'استعلام سفارش'},
    {link: '/', labelEn: 'Wishlist', labelFa: 'لیست آرزوها'},
]
let linksArray2 = [
    {link: '/', labelEn: 'Cart', labelFa: 'سبد خرید'},
    {link: '/', labelEn: 'Woman Fashion', labelFa: 'مد زن'},
    {link: '/', labelEn: 'My Account', labelFa: 'حساب من'},
    {link: '/', labelEn: 'Wishlist', labelFa: 'لیست آرزوها'},
    {link: '/', labelEn: 'Terms', labelFa: 'قوانین'},
]
// Container interface
interface Container{
    direction?: string,
}
const SeprateContainers = styled.div`
    flex: 1 1 20rem;
    display: flex;
    flex-direction: ${(props: Container) => function(){
        switch(props.direction){
            case 'left':
                return 'column';
            case 'center':
                return 'column';    
            case 'right':
                return 'column';    
            default: 
                return;    
        }
    }()};
    justify-content: ${(props: Container) => function(){
        switch(props.direction){
            case 'left':
                return 'space-around';
            case 'right':
                return 'space-around';    
            default: 
                return;    
        }
    }()};
    align-items: ${(props: Container) => function(){
        switch(props.direction){
            case 'left':
                return 'center';
            default: 
                return;    
        }
    }()};
`
// left side container
const LeftSideHeader = styled.h1`
margin: 1rem auto;
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Dancing Script', cursive;
`
const LeftSideParagraph = styled.p`
margin: 2rem auto;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
`
const LeftSideIconsContainer = styled.div`
    margin: 2rem auto;
    width: 90%;
    /* margin: auto; */
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
// center side container
interface prop{
    currentLang?: string
}
const CenterSideHeader = styled.h2`
    font-size: 2.5rem;
    text-align: center;

`
const CenterSideLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const CenterSideUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CenterSideEachList = styled.li`
    font-size: 1.2rem;
    font-weight: 600;
    color: black;
    flex: 1;
    margin: 1rem;
`
const CenterSideUnorderedList = ({ links, currentLang }: { links: {link: string, labelEn: string, labelFa: string}[], currentLang: string}): JSX.Element => {

    return(
        <CenterSideUl>
            {links.map((each) => (
                <CenterSideEachList>
                    <Link target='_blank' to={each.link}>{checkLang(currentLang, each.labelEn, each.labelFa)}</Link>
                </CenterSideEachList>
            ))}
        </CenterSideUl>
    )
}
// Right side container
const RightSideHeader = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    text-align: left;
    margin: 1rem;
`
const RightSideInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem;
`
const RightSideLocationText = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
`
const PaymentOptionsImage = styled.img`
    width: 16rem;
    height: 2rem;
    margin: 1rem;
`
export default function Footer(): JSX.Element {
    interface reducers{
        themeReducer: any,
        authenticationReducer: any,
        cartReducer: any,
        languageReducer: any,
    }
    const currentLang = useSelector((state: reducers) => state.languageReducer);
    return (
        <FooterStyled>
        <SeprateContainers direction='left'>
            <LeftSideHeader>{checkLang(currentLang, 'eCommerce', 'فروشگاه')}</LeftSideHeader>
            <LeftSideParagraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, beatae?</LeftSideParagraph>
            <LeftSideIconsContainer>
                <Link target='_blank' to=''><Facebook style={iconStylesFunc(['3rem', '3rem',  '50%', null])} /></Link>
                <Link target='_blank' to=''><Instagram style={iconStylesFunc(['3rem', '3rem',  '50%', 'red'])} /></Link>
                <Link target='_blank' to=''><Twitter style={iconStylesFunc(['3rem', '3rem',  '50%', null])} /></Link>
                <Link target='_blank' to=''><Pinterest style={iconStylesFunc(['3rem', '3rem',  '50%', 'green'])} /></Link>
            </LeftSideIconsContainer>
        </SeprateContainers>
        <SeprateContainers direction='center'>
            <CenterSideHeader>
                {checkLang(currentLang, 'Useful Links', 'لینک های مفید')}
            </CenterSideHeader>
            <CenterSideLinkContainer>
                <CenterSideUnorderedList links={linksArray1} currentLang={currentLang} />
                <CenterSideUnorderedList links={linksArray2} currentLang={currentLang} />
            </CenterSideLinkContainer>
        </SeprateContainers>
        <SeprateContainers direction='right'>
            <RightSideHeader>Contact</RightSideHeader>
            <RightSideInfoContainer>
                <Room style={{width: '2rem', height: '2rem'}} />
                <RightSideLocationText>{checkLang(currentLang, '622 Dixie Path, South Tobinchester 98336', 'تبریز قونقا باشی پلاک 85')}</RightSideLocationText>
            </RightSideInfoContainer>
            <RightSideInfoContainer>
                <Phone style={{width: '2rem', height: '2rem'}} />
                <RightSideLocationText>+98 021 385 8585</RightSideLocationText>
            </RightSideInfoContainer>
            <RightSideInfoContainer>
                <MailOutline style={{width: '2rem', height: '2rem'}} />
                <RightSideLocationText>contact@mail.ecommerce.com</RightSideLocationText>
            </RightSideInfoContainer>
            <PaymentOptionsImage src='https://i.ibb.co/Qfvn4z6/payment.png' />
        </SeprateContainers>
    </FooterStyled>
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

function iconStylesFunc(arr: string[]): React.CSSProperties{

    return{
        width: arr[0],
        height: arr[1],
        borderRadius: arr[2],
        color: arr[3],
    }
}
