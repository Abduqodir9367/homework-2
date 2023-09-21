import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./layout/about/About";
import Articles from "./layout/articles1/Articles";
import Contact from "./layout/contact/Contact";
import Hero from "./layout/hero/Hero";
import Service2 from "./layout/service2/Service2";
import Service from "./layout/services1/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Service2 />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
