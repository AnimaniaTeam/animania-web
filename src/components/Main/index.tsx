import React from "react";
import { Box } from "@chakra-ui/react";
import { AnimeList } from "../AnimeList";
import { useAnimeData } from "../hooks/useAnimeData";
import { Divider } from "./Divider";

export function Main() {
  const data = useAnimeData();

  return (
    <Box as="main" m={10} px={6} py={5} bg="#FFF59D" rounded="2xl">
      <AnimeList day="Domingo" list={data.sunday} />
      <Divider />
      <AnimeList day="Segunda" list={data.monday} />
      <Divider />
      <AnimeList day="Terça" list={data.tuesday} />
      <Divider />
      <AnimeList day="Quarta" list={data.wednesday} />
      <Divider />
      <AnimeList day="Quinta" list={data.thursday} />
      <Divider />
      <AnimeList day="Sexta" list={data.friday} />
      <Divider />
      <AnimeList day="Sábado" list={data.saturday} />
    </Box>
  );
}

