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
      <Box className="skillscont" my={"60px"} w="80%" mx={"auto"}>
        <Box className="skills">
          <Skill
            name="HTML"
            color={"#e44c24"}
            comp={<IoLogoHtml5 />}
            reflink="https://www.w3schools.com/html"
          />
          <Skill
            name="JavaScript"
            color={"#fcc43d"}
            comp={<SiJavascript />}
            reflink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skill
            name="CSS"
            color={"#1474b4"}
            comp={<IoLogoCss3 />}
            reflink="https://www.w3schools.com/css"
          />
          <Skill
            name="React"
            color={"#a3e8fd"}
            comp={<SiReact />}
            reflink="https://reactjs.org/"
          />
          <Skill
            name="Redux"
            color={"#441f71"}
            comp={<SiRedux />}
            reflink="https://redux.js.org/"
          />
          <Skill
            name="Firebase"
            color={"#f58519"}
            comp={<SiFirebase />}
            reflink="https://firebase.google.com/"
          />
          <Skill
            name="MongoDB"
            color={"#65b555"}
            comp={<SiMongodb />}
            reflink="https://www.mongodb.com/"
          />
          <Skill
            name="TypeScript"
            color={"#007acc "}
            comp={<SiTypescript />}
            reflink="
          https://www.typescriptlang.org/"
          />
          <Skill
            name="NodeJS"
            color={"#3c873a"}
            comp={<IoLogoNodejs />}
            reflink="https://nodejs.org/en"
          />
          <Skill
            name="Express"
            color={"#303030"}
            comp={<SiExpress />}
            reflink="https://expressjs.com/"
          />
          <Skill
            name="Babel"
            color={"#F0DB4F"}
            comp={<SiBabel />}
            reflink="https://babeljs.io/"
          />
          <Skill
            name="Chakraui"
            color={"#3bc6bd"}
            comp={<SiChakraui />}
            reflink="https://chakra-ui.com/"
          />
          <Skill
            name="Materialui"
            color={"#0c81d8"}
            comp={<SiMaterialui />}
            reflink="https://mui.com/"
          />
          <Skill
            name="Bootstrap"
            color={"#563d7c "}
            comp={<SiBootstrap />}
            reflink="https://getbootstrap.com/"
          />
          <Skill
            name="Tailwindcss"
            color={"#3bbbfa"}
            comp={<SiTailwindcss />}
            reflink="https://tailwindcss.com/"
          />
          <Skill
            name="Git"
            color={"#f43e2f"}
            comp={<SiGit />}
            reflink="https://git-scm.com/"
          />
          <Skill
            name="Java"
            color={"#5382a1"}
            comp={<SiJava />}
            reflink="https://www.java.com/en/"
          />
          <Skill
            name="C++"
            color={"#9c043c"}
            comp={<SiCplusplus />}
            reflink="https://www.w3schools.com/cpp"
          />
        </Box>
      </Box>
    </section>
  );
};
