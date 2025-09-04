import HeroImage from "../assets/images/hero.jpg";
import Logistics from "../assets/Services/logistics.jpg";
import Envelope from "../assets/Services/envelopes.jpg";
import PeopleTalking from "../assets/Services/peopetalking.jpg";
import Export from "../assets/Services/packing.jpg";
import FounderImg from "../assets/images/founderImg.png";
import VisionImg from "../assets/images/phto1.jpg";
import matchmaking from "../assets/images/phto2.jpg";
import logistics from "../assets/images/phto3.jpg";
import advisory from "../assets/images/phto4.jpg";
import CGlogo from "../assets/images/CGlogo.png";
import CGlogo2 from "../assets/images/CGlogo (2).png";
import CGlogoBrown from "../assets/images/CGlogoBrown.png";
import step5 from "../assets/images/step5.jpg";
import step2 from "../assets/images/step2.jpg";
import step3 from "../assets/images/step3.jpg";
import step4 from "../assets/images/step4.jpg";
import TechHardWare from "../assets/images/ProcessedFood2.png";
import IndustryMachine from "../assets/images/IndustryMachine.png";
import ProcessedFood from "../assets/images/pharmecticals.png";
import DiaryProduct from "../assets/images/DiaryProducts.png";
import AfricanSpice from "../assets/images/AfricanSpices.png";
import TradePfood from '../assets/images/TradePfood.png'
import BambooProduct from "../assets/images/BambooProduct.jpg";
import AfricanOil from "../assets/images/AfricanOil2.png";
import LandingImg from '../assets/images/landingimg.png'
import Funiture from "../assets/images/Funiture.jpg" 
import Textiles from '../assets/images/Textiles.png'

 type imageProp = {
    img: string
}

export const landingImg: imageProp = { img: LandingImg };
export const EstoniaToAfrica = {
  TechHardWare,
  IndustryMachine,
  ProcessedFood,
  DiaryProduct,
  Funiture,
};



export const AfricaToEstonia = {
  AfricanSpice,
  AfricanOil,
  Textiles,
  BambooProduct,
  TradePfood,
  
};

export const heroImage = HeroImage;

export const howItWorksImages = {
  step5,
  step2,
  step3,
  step4,
};

export const serviceImages = {
  Logistics,
  Envelope,
  PeopleTalking,
  Export
};
export { FounderImg, VisionImg, CGlogo, CGlogo2, CGlogoBrown };
export const modelImages = {
  matchmaking,
  logistics,
  advisory,
};
