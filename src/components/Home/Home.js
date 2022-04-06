import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header/>
            <Products/>
            <Banner/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;