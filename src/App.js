import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router';
import { HeaderComponent } from './components/header';
import { VideoComponent } from './components/videoWrapper';
import { AboutUsComponent } from './components/aboutUs';
import { OurCollectionComponent } from './components/ourCollection';
import { WhyMonamourComponent } from './components/whyToChooseUs';
import { LocationComponent } from './components/location';
import { FooterComponent } from './components/footer';
function App() {
  return (
      <BrowserRouter>
        <HeaderComponent/>
        <VideoComponent/>
        <AboutUsComponent/>
        <OurCollectionComponent/>
        <WhyMonamourComponent/>
        <LocationComponent/>
        <FooterComponent/>
      </BrowserRouter>
      
  );
}

export default App;
