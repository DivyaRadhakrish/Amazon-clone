import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner image"
        />
        <div className="home__row">
          <Product
            id="1231234"
            title="JBL Live 650BTNC Over-Ear Headphones with Active Noise Reduction and Up to 30-Hour Battery Life, Case in Black"
            price={1220.05}
            image={
              "https://m.media-amazon.com/images/I/71NYy+DnUNL._AC_SY450_.jpg"
            }
            rating={5}
          />
          <Product
            id="7394274"
            title="The 48 Laws Of Power: Robert Greene Paperback – 1 Nov. 2000"
            price={173.44}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41VCBqRMNML._SX351_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3892379"
            title="OnePlus Nord CE 5G 12GB RAM 256GB SIM Free Smartphone with Triple Cameras and Dual SIM - 2 Year Warranty - Blue Void"
            price={3560.0}
            image={
              "https://m.media-amazon.com/images/I/718bgu0Ky9S._AC_SY450_.jpg"
            }
            rating={5}
          />
          <Product
            id="9238922"
            title="Echo (4th generation) International Version | With premium sound, smart home hub and Alexa | Charcoal "
            price={999}
            image={
              "https://m.media-amazon.com/images/I/61B+ou9GyOL._AC_SX679_.jpg"
            }
            rating={5}
          />
          <Product
            id="9930022"
            title="Fitbit Versa 3 - Smart Watch with GPS, Heart Rate 24/7, Active Zone Minutes, Voice Assistant and Up to 6+ Day Battery Life, Midnight / Soft Gold"
            price={1647.2}
            image={
              "https://m.media-amazon.com/images/I/71kpCmkm5-L._AC_SX679_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1293920"
            title="Xiaomi Mi TV QLED 75', L75M6-ESG"
            price={18089}
            image={
              "https://m.media-amazon.com/images/I/811Mnb0JxFL._AC_SL1500_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
