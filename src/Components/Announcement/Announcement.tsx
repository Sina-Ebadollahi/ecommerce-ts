import React from 'react';
import { useSelector } from 'react-redux';
import { Reducer } from 'redux';
import styled from 'styled-components';
const AnnounceContainer = styled.div`
background-color: #308b3c;
    min-height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`
const AnnouncementText = styled.h1`
    font-size: 1.3rem;
    color: white;
`
export default function Announcement() {
  interface states{
    languageReducer: Reducer,
  }
  const currentLang: any = useSelector((state: states) => state.languageReducer);
  // const { currentLang, themeStatus } = useGlobalContext();
  return (
  <AnnounceContainer>
      <AnnouncementText>
        {currentLang === 'english' ? 'Super Deal! Free Shipping on Orders Over $50' : 'پیشنهاد رویایی! پست رایگان برای خرید های بالای 50 دلار'}
      </AnnouncementText>
  </AnnounceContainer>
  );
}
