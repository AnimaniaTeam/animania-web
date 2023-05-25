import { Navbar } from "~/components/Navbar";

import { Flex } from "@chakra-ui/react";
import { Main } from "~/components/Main";

export default function Home() {
  return (
    <Flex direction="column">
      <Navbar />
      <Main />
    </Flex>
  );
}

