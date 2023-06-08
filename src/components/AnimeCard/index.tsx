import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  ThumbsUp,
  ThumbsDown,
  Trash,
  PencilSimpleLine,
} from "@phosphor-icons/react";
import { AnimeData } from "../@types/AnimeData";
import { GenreList } from "./GenreList";

type AnimeCardProps = {
  anime: AnimeData;
};

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Box>
      <Heading as="h3" size="lg" color="#000000" mb={2.5}>
        {anime.title}
      </Heading>
      <Flex>
        <Box>
          <Image
            src={anime.image_url}
            alt={anime.title}
            rounded="lg"
            w={40}
            shadow="md"
          />
          <Flex justify="space-between" mt={5}>
            <Button
              rounded="lg"
              bg="#652B19"
              py={2}
              px={4}
              _hover={{ bg: "#833721" }}
            >
              <Trash size={24} color="#FFF" />
            </Button>

            <Button
              rounded="lg"
              bg="#2C5282"
              py={2}
              px={4}
              _hover={{ bg: "#346198" }}
            >
              <PencilSimpleLine size={24} color="#FFF" />
            </Button>
          </Flex>
        </Box>

        <Flex direction="column" gap={2.5} ml={4} color="#000000" fontSize="md">
          <Flex gap={2.5} flexWrap="wrap">
            <Text as="b">Gênero:</Text> {<GenreList genres={anime.genres} />}
          </Flex>

          <Text>
            <Text as="b">Onde assistir:</Text> {anime.whereToWatch}
          </Text>

          <Text>
            <Text as="b">Episódios:</Text> {anime.numberOfEpisodes}
          </Text>

          <Text>
            <Text as="b">Estreia:</Text> {anime.releaseDate}
          </Text>

          <Text>
            <Text as="b">Temporadas:</Text> {anime.numberOfSeasons}
          </Text>

          <Flex gap={5}>
            <Flex align="center">
              <ThumbsUp size={24} color="#38a169" weight="fill" />
              {anime.likes}
            </Flex>

            <Flex align="center">
              <ThumbsDown size={24} color="#e53e3e" weight="fill" />
              {anime.dislikes}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

