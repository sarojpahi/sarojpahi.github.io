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
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGraphql,
  SiAngular,
  SiPython,
  SiRedis,
} from "react-icons/si";
import { Skill } from "./Skill";
import { motion } from "framer-motion";
import { container, item, textVariant } from "../utility/Component/motion";
import { TbBrandNextjs } from "react-icons/tb";
import grapgcms from "../../Assets/graphcms.png";
import { Framer } from "./Framer";
export const Skills = () => {
  return (
    <section id="skill">
      <Box position={"relative"} py="20px">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <VStack w={"full"} h={"full"} align={"center"} justify={"center"}>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <Heading
                color={"#00ccff"}
                textDecoration="underline"
                textUnderlineOffset={"5px"}
              >
                About My Skills
              </Heading>
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
                  name="TypeScript"
                  color={"#007acc "}
                  comp={<SiTypescript />}
                  reflink="
          https://www.typescriptlang.org/"
                />
              </motion.li>

              <motion.li variants={item}>
                <Skill
                  name="Python"
                  color={"#FFD43B"}
                  comp={<SiPython />}
                  reflink="https://www.python.org/"
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
                  name="NextJS"
                  color={"#000"}
                  comp={<TbBrandNextjs />}
                  reflink="https://nextjs.org/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="Angular"
                  color={"#B52E31"}
                  comp={<SiAngular />}
                  reflink="https://angular.io/"
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
                  name="Redis"
                  color={"#A41E11"}
                  comp={<SiRedis />}
                  reflink="https://redis.io/"
                />
              </motion.li>

              <motion.li variants={item}>
                <Skill
                  name="GraphQL"
                  color={"#e535ab"}
                  comp={<SiGraphql />}
                  reflink="https://graphql.org/"
                />
              </motion.li>
              <motion.li variants={item}>
                <Skill
                  name="HyGraph"
                  color={"#4f2bc2"}
                  icon={grapgcms}
                  reflink="https://hygraph.com/"
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
                  name="FramerM..."
                  color={"#f349fd"}
                  comp={<Framer />}
                  reflink="https://www.framer.com/motion/"
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
            </motion.ul>
          </Box>
        </motion.div>
      </Box>
    </section>
  );
};
