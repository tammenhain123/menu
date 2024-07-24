// src/App.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
     <Header
        navBackgroundColor="#4F372F"
        backgroundImageUrl="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
      />
    </>
  );
}

export default App;
