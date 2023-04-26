import { Flex, Heading } from "@chakra-ui/react";
import { Input } from "../Input";
import { Button } from "../Button";

export function Header() {
  return (
    <Flex px={10} py={5} justifyContent="space-between">
      <Heading color="black" fontFamily="Skranji" fontSize="4rem">
        Lançamentos
      </Heading>

      <Input placeholder="Procurar lançamento" />

      <Button>Adicionar Lançamento</Button>
    </Flex>
  );
}

