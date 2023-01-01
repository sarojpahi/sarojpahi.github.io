import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Framer = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <Box w="40px" h="30px" mb="10px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </Box>
  );
};
