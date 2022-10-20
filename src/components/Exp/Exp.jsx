import React from "react";
import "./exp.css";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import {
  SiRedux,
  SiReact,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiBabel,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiJava,
  SiCplusplus,
} from "react-icons/si";
import { Skill } from "./Skill";
export const Skills = () => {
  return (
    <section id="exp">
      <VStack align={"center"} justify={"center"} my="20px">
        <Heading color={"#00ccff"}>About My Skills</Heading>
      </VStack>
      <Box className="skillscont" mt={"60px"} w="80%" mx={"auto"}>
        <Box className="skills">
          <Skill
            color={"#e44c24"}
            comp={<IoLogoHtml5 />}
            reflink="https://www.w3schools.com/html"
          />
          <Skill
            color={"#fcc43d"}
            comp={<SiJavascript />}
            reflink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skill
            color={"#1474b4"}
            comp={<IoLogoCss3 />}
            reflink="https://www.w3schools.com/css"
          />
          <Skill
            color={"#a3e8fd"}
            comp={<SiReact />}
            reflink="https://reactjs.org/"
          />
          <Skill
            color={"#441f71"}
            comp={<SiRedux />}
            reflink="https://redux.js.org/"
          />
          <Skill
            color={"#f58519"}
            comp={<SiFirebase />}
            reflink="https://firebase.google.com/"
          />
          <Skill
            color={"#65b555"}
            comp={<SiMongodb />}
            reflink="https://www.mongodb.com/"
          />
          <Skill
            color={"#007acc "}
            comp={<SiTypescript />}
            reflink="
          https://www.typescriptlang.org/"
          />
          <Skill
            color={"#3c873a"}
            comp={<IoLogoNodejs />}
            reflink="https://nodejs.org/en"
          />
          <Skill
            color={"#303030"}
            comp={<SiExpress />}
            reflink="https://expressjs.com/"
          />
          <Skill
            color={"#F0DB4F"}
            comp={<SiBabel />}
            reflink="https://babeljs.io/"
          />
          <Skill
            color={"#3bc6bd"}
            comp={<SiChakraui />}
            reflink="https://chakra-ui.com/"
          />
          <Skill
            color={"#0c81d8"}
            comp={<SiMaterialui />}
            reflink="https://mui.com/"
          />
          <Skill
            color={"#563d7c "}
            comp={<SiBootstrap />}
            reflink="https://getbootstrap.com/"
          />
          <Skill
            color={"#3bbbfa"}
            comp={<SiTailwindcss />}
            reflink="https://tailwindcss.com/"
          />
          <Skill
            color={"#f43e2f"}
            comp={<SiGit />}
            reflink="https://git-scm.com/"
          />
          <Skill
            color={"#5382a1"}
            comp={<SiJava />}
            reflink="https://www.java.com/en/"
          />
          <Skill
            color={"#9c043c"}
            comp={<SiCplusplus />}
            reflink="https://www.w3schools.com/cpp"
          />
        </Box>
      </Box>
    </section>
  );
};
