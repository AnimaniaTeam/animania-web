import { Text } from '@chakra-ui/react'

export function GenreList({ genres }: { genres: string[] }) {
  return (
    <>
      {genres.map((genre) => (
        <Text
          key={genre}
          color="#ffffff"
          size="xs"
          rounded="md"
          bg="#3182CE"
          px={2}
        >
          {genre}
        </Text>
      ))}
    </>
  )
}
