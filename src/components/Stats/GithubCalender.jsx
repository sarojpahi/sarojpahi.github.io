import { Box, Flex, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export const GithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <VStack m="auto" w="90%" gap="40px" color={"white"} py="30px">
      <Heading color={"#00ccff"}>About My Github Stats</Heading>
      <GitHubCalendar
        username="sarojpahi"
        transformData={selectLastHalfYear}
        blockMargin={5}
        blockRadius={7}
        blockSize={15}
        theme={{
          level0: "#F0F0F0",
          level2: "#01BD3D",
          level1: "#7AC7C4",
          level3: "#F73859",
          level4: "#384259",
        }}
        showWeekdayLabels
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
      <Flex
        w="100%"
        gap="10px"
        justifyContent="center"
        align={"center"}
        flexWrap="wrap"
      >
        <Box>
          <Image
            w={"100%"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=sarojpahi&theme=midnight-purple"
            alt="sarojpahi"
          />
        </Box>
        <Box>
          <Image
            w="100%"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=sarojpahi&show_icons=true&locale=en&layout=compact&theme=midnight-purple"
            alt="sarojpahi"
          />
        </Box>
        <Box>
          <Image
            w="100%"
            src="https://github-readme-stats.vercel.app/api?username=sarojpahi&show_icons=true&locale=en&theme=midnight-purple"
            alt="sarojpahi"
          />
        </Box>
      </Flex>
    </VStack>
  );
};
