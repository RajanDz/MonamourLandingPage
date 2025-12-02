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
import { useEffect } from 'react';
function App() {
  

    useEffect(() => {
  const sections = document.querySelectorAll("[data-section]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("VIDLJIVO:", entry.target.classList);
        entry.target.classList.add("show")
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  return () => observer.disconnect();
}, []); 

  return (
    <div>
      <HeaderComponent/>
        <VideoComponent/>
        <AboutUsComponent/>
        <OurCollectionComponent/>
        <WhyMonamourComponent/>
        <LocationComponent/>
        <FooterComponent/>
    </div>      
  );
}

export default App;
