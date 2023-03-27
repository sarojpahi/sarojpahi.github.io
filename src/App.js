import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Exp/Exp";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import MatrixRain from "./components/Hero/MatrixRain";
import { Nav } from "./components/Nav/Nav";
import { Project } from "./components/Project/Project";
import { GithubCalender } from "./components/Stats/GithubCalender";

function App() {
  return (
    <ChakraProvider>
      <div className="matrixRain">
        <MatrixRain />
      </div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <GithubCalender />
      <Project />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
