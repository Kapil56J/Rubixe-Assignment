import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Card />
      <ContactForm />
    < Footer />
    </div>
  );
}