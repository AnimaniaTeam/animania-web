import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { AnimeData } from "../@types/AnimeData";
import { AnimeCard } from "../AnimeCard";

type DayListProps = {
  day: string;
  list: AnimeData[];
};

export function AnimeList({ day, list }: DayListProps) {
  return (
    <Box pt={5} pb={10}>
      <Heading as="h2" size="4xl" color="#000000" mb={5}>
        {day}
      </Heading>

      <SimpleGrid columns={3} spacingX={14} spacingY={10}>
        {list.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

