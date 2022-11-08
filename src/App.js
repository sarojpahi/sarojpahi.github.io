import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Exp/Exp";
import { Hero } from "./components/Hero/Hero";
import { Particle } from "./components/Hero/Particle";
import { Nav } from "./components/Nav/Nav";
import { Project } from "./components/Project/Project";
import { GithubCalender } from "./components/Stats/GithubCalender";

function App() {
  return (
    <ChakraProvider>
      <Particle />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <GithubCalender />
      <Project />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
