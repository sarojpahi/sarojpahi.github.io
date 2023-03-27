import { Box } from "@chakra-ui/react";
import { GmContact } from "../utility/Component/GmContact";
export const Contact = () => {
  return (
    <section id="contact">
      <Box pos={"relative"} h="100vh" w={"full"}>
        <GmContact />
      </Box>
    </section>
  );
};
