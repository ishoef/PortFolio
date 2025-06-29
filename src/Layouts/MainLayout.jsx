import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
      <>
        <Header></Header>
        <div className='min-h-[calc(100vh-300px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
};

export default MainLayout;