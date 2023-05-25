import { Flex } from "@chakra-ui/react";

import { Navbar } from "~/components/Navbar";
import { Header } from "~/components/Header";

export default function Home() {
  return (
    <Flex direction="column">
      <Navbar />
      <Header />
    </Flex>
  );
}

