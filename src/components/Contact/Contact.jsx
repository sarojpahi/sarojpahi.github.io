import { Box } from "@chakra-ui/react";
import bg from "../../Assets/w3.jpg";
import { GmContact } from "../utility/Component/GmContact";
export const Contact = () => {
  return (
    <section id="contact">
      <Box
        position={"relative"}
        bgImage={[bg]}
        bgSize={["auto 100%", "100% 100%"]}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        h="100vh"
      >
        <GmContact />
        <Box h={"40px"} pointerEvents="none"></Box>
      </Box>
    </section>
  );
};
