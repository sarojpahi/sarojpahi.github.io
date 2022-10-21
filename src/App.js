import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Exp/Exp";
import { Hero } from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";
import { Project } from "./components/Project/Project";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
