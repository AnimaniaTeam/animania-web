import { Box, Flex, Heading } from "@chakra-ui/react";
import { Input } from "../Input";
import { Button } from "../Button";
import { ReleasesCounter } from "../ReleasesCounter";

export function Header() {
  return (
    <Flex as="header" justifyContent="center" px={10}>
      <Box w="full" maxW="90rem">
        <Flex py={5} alignItems="center" justifyContent="space-between">
          <Heading color="black" fontSize="4rem">
            Lançamentos
          </Heading>

          <Input placeholder="Procurar lançamento" />

          <Button>Adicionar Lançamento</Button>
        </Flex>

        <Flex justifyContent="space-between">
          <ReleasesCounter title="Todos" count={30} isActive />
          <ReleasesCounter title="Domingo" count={8} />
          <ReleasesCounter title="Segunda" count={2} />
          <ReleasesCounter title="Terça" count={4} />
          <ReleasesCounter title="Quarta" count={6} />
          <ReleasesCounter title="Quinta" count={2} />
          <ReleasesCounter title="Sexta" count={5} />
          <ReleasesCounter title="Sábado" count={3} />
        </Flex>
      </Box>
    </Flex>
  );
}

