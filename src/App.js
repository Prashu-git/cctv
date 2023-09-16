import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import HomeCenter from './Home/HomeCenter';
import Review from './Home/Review';
import WhatsApp from './Home/WhatsApp';

function App() {
  return (
    <>
   
   <Header/> 
   <Slider/>
   <HomeCenter/>


<Review/>
   <Footer/>
   <WhatsApp/>
   </>
  );
}

export default App;
