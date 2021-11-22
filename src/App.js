import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import { Route, BrowserRouter } from "react-router-dom"
import Section1 from './Components/Section-1/Section1';
import Section2 from './Components/Section-2/Section2';
import Section3 from './Components/Section-3/Section3';
import Footer from './Components/Footer/Footer';
import Registration from './Components/Registration/Registration';
import Navbar from './Components/Navbar/Navbar';
import Faq from './Components/Faq/Faq';
import Tariffs from './Components/Tariffs/Tariffs';
import Shops from './Components/Shops/Shops';
import Support from './Components/Support/Support';
import Region from './Components/Region/Region';
import Shoppings from "./Components/Shoppings/Shoppings"
import Sug from './Components/Suggestions/Sug';
import Cor from './Components/Corporative/Corpa';
import About from './Components/About/About';
import News from './Components/News/News';
import Vacancies from './Components/Vacancies/Vacancies';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/tariffs">
          <Tariffs />
        </Route>
        <Route exact path="/shops" >
          <Shops />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/regions">
          <Region />
        </Route>
        <Route path="/shops/:id">
          <Shoppings />
        </Route>
        <Route path="/suggestions">
          <Sug />
        </Route>
        <Route path="/corporative">
          <Cor />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/vacancies">
          <Vacancies /> 
        </Route>
        <Route exact path="/home">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
        </Route>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
