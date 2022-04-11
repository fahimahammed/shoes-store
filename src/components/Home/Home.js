import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Products/>
            <Banner/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;