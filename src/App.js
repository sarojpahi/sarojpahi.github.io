import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Exp/Exp";
import { Hero } from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
