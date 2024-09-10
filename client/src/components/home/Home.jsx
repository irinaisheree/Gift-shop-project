import Footer from "../footer/Footer";
import Gift from "../gift-section/GiftSection";
import Header from "../header/Header"
import Saving from "../saving-section/SavingSection";
import Shop from "../shop-section/ShopSection";
import Slider from "../slider/Slider"

export default function Home(){
  return (
    <>
  
  <Slider/>
  <Shop/>
  <Saving/>
  <Gift/>
 
  </>
  );
}