import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Products />
      <About />
    </>
  );
};

export default App;
