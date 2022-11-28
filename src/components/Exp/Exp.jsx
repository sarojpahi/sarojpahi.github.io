import React from "react";
import "./exp.css";
import bg from "../../Assets/mainbg.jpg";
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
import { motion } from "framer-motion";
import { container, item, textVariant } from "../utility/Component/motion";
export const Skills = () => {
  return (
    <section id="skill">
      <Box
        position={"relative"}
        bgImage={bg}
        bgSize={["auto 100%", "100% 100%"]}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        h="max-content"
        py="20px"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <VStack align={"center"} justify={"center"}>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <Heading color={"#00ccff"}>About My Skills</Heading>
            </motion.div>
          </VStack>
          <Box className="skillscont" my={"60px"} w="80%" mx={"auto"}>
            <motion.ul
              className="skills"
              variants={container}
              viewport={{ once: true }}
            >
              <motion.li variants={item}>
                <Skill
                  name="HTML"
                  color={"#e44c24"}
                  comp={<IoLogoHtml5 />}
                  reflink="https://www.w3schools.com/html"
                />
              </motion.li>

              <motion.li variants={item}>
                <Skill
                  name="JavaScript"
                  color={"#fcc43d"}
                  comp={<SiJavascript />}
                  reflink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="CSS"
                  color={"#1474b4"}
                  comp={<IoLogoCss3 />}
                  reflink="https://www.w3schools.com/css"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="React"
                  color={"#a3e8fd"}
                  comp={<SiReact />}
                  reflink="https://reactjs.org/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Redux"
                  color={"#441f71"}
                  comp={<SiRedux />}
                  reflink="https://redux.js.org/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Firebase"
                  color={"#f58519"}
                  comp={<SiFirebase />}
                  reflink="https://firebase.google.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="MongoDB"
                  color={"#65b555"}
                  comp={<SiMongodb />}
                  reflink="https://www.mongodb.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="TypeScript"
                  color={"#007acc "}
                  comp={<SiTypescript />}
                  reflink="
          https://www.typescriptlang.org/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="NodeJS"
                  color={"#3c873a"}
                  comp={<IoLogoNodejs />}
                  reflink="https://nodejs.org/en"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Express"
                  color={"#303030"}
                  comp={<SiExpress />}
                  reflink="https://expressjs.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Babel"
                  color={"#F0DB4F"}
                  comp={<SiBabel />}
                  reflink="https://babeljs.io/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Chakraui"
                  color={"#3bc6bd"}
                  comp={<SiChakraui />}
                  reflink="https://chakra-ui.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Materialui"
                  color={"#0c81d8"}
                  comp={<SiMaterialui />}
                  reflink="https://mui.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Bootstrap"
                  color={"#563d7c "}
                  comp={<SiBootstrap />}
                  reflink="https://getbootstrap.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Tailwindcss"
                  color={"#3bbbfa"}
                  comp={<SiTailwindcss />}
                  reflink="https://tailwindcss.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Git"
                  color={"#f43e2f"}
                  comp={<SiGit />}
                  reflink="https://git-scm.com/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Java"
                  color={"#5382a1"}
                  comp={<SiJava />}
                  reflink="https://www.java.com/en/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="C++"
                  color={"#9c043c"}
                  comp={<SiCplusplus />}
                  reflink="https://www.w3schools.com/cpp"
                />
              </motion.li>
            </motion.ul>
          </Box>
        </motion.div>
      </Box>
    </section>
  );
};
