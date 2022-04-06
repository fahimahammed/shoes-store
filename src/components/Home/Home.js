import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header/>
            <Products/>
            <Banner/>
            <ContactUs/>
        </div>
    );
};

export default Home;