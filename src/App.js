
import HeroSection from './components/HeroSection';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import { Routes, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import Header from './components/Headersection';

const App = () => {

  return (
    <HashRouter>

      <Header />

      <Routes>
            <Route exact path="/" element={ <HeroSection /> } />
            <Route exact path="/testimonials" element={ <Testimonials /> } />
            <Route exact path="/booknow" element={ <BookingForm /> } />
      </Routes>
    </HashRouter>
  );
};

export default App;

