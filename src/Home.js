import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img  
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home_row">
                    <Product 
                    id="123456789"
                    title="The Lean Startup" 
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5} />
                    
                    <Product 
                    id="49538094"
                    title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    price={239.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    rating={3} />
                    
                </div>
                <div className="home_row">
                    <Product 
                        id="873648823"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={3} 
                    />
                    <Product 
                        id="837434929"
                        title="Amzon Echo (3rd generation) | Smart speaker" 
                        price={99.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5FwTZsWJIpvgFxH97UI-obZrLv3pwH1HHTqNSKFvjiW8rCYxNiJEJKvyF7jAl9Lvy7EmJzMfF&usqp=CAc"
                        rating={3} 
                    />
                    <Product 
                        id="897298382"
                        title="New Apple IPad Pro (12.9-inch, Wi-Fi, 128gb) - Silver (4th Generation)" 
                        price={799.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={3} 
                    />
                </div>
                <div className="home_row">
                <Product 
                        id="989724983"
                        title="Samsung Curved Monitor" 
                        price={1299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={3} 
                    />
                </div>
            
            </div> 
        </div>
    )
}

export default Home
