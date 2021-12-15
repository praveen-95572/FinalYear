import './App.css';
import 'bootstrap/dist/css/bootstrap.css';  //bootstrap through npm
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/Body.css";
import "./assets/css/style.css";



import { Header } from './components/Header';
import { Footer} from './components/Footer';
import {Contact} from './components/Contact';
import { About } from './components/About';
import { Signup } from './components/Signup';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      
      <Footer/>
    </div>
  );
}

export default App;
