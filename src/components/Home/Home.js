import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Footer from '../Footer/Footer';
import ScrollToTop from'../ScrollToTop/ScrollToTop';



const Home = ( { winWidth, randProducts, onAddToCart }) => {
    return (
        <div>
             <ScrollToTop />
{  winWidth > 760 ?   
        <div>   
            <Header winWidth={winWidth} />
            <Section2 />
            <Section3 randProducts={randProducts} onAddToCart={onAddToCart}/>
            <Section4 />
            <Footer />
        </div>
        : <div>
            <Header winWidth={winWidth} />
            <Section3 randProducts={randProducts} onAddToCart={onAddToCart}/>
            <Section4 />
            <Footer />
        </div>
        }

        </div>

    )
}

export default Home;