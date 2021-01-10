import React from "react";
import "./Home.css";
import Product from "./Product";
import { uuid } from "uuidv4";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            key={uuid()}
            id={0}
            title={
              "The Lean Startup: How Constant Innovation Creates Rapidly Successful Business Paperback | Best Seller"
            }
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            key={uuid()}
            id={1}
            title={
              "Plantronics Marque 2 M165 Bluetooth Headset Black | 4th Generation of the kind in history"
            }
            price={19.99}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtfeB_g6i-b5tO9HhoweexsALmZnKNxBECJNs0a4Jd6ByDKjwaRCUxatXcA&usqp=CAc"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key={uuid()}
            id={2}
            title={"Samsugn ACFG8GRKE9SUXXESS 49' Curved LED Gaming Monitor"}
            price={199.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            }
            rating={4}
          />
          <Product
            key={uuid()}
            id={3}
            title={
              "Amazon Echo (3rd Generation) | Smart speaker with Alexa, Chaorcoal fabric"
            }
            price={98.99}
            image={
              "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            }
            rating={5}
          />
          <Product
            key={uuid()}
            id={4}
            title={
              "New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver 4th Generation"
            }
            price={459.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key={uuid()}
            id={5}
            title={
              "Samsung Gaming Monitor 49' Full HD Screen - Super Ultra Wide definition 5120x1440"
            }
            price={1999.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
