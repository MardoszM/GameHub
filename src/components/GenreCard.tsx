import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import Genre from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  children: Genre;
  onSelectGenre: (genreId: number) => void;
  selectedGenreId: number | null;
}

const GenreCard = ({ children, onSelectGenre, selectedGenreId }: Props) => {
  return (
    <ListItem>
      <HStack>
        <Image
          boxSize="32px"
          paddingY={"5px"}
          objectFit="cover"
          borderRadius={8}
          src={getCroppedImageUrl(children.image_background)}
        />
        <Button
          onClick={() => onSelectGenre(children.id)}
          fontWeight={selectedGenreId === children.id ? "bold" : "normal"}
          fontSize="lg"
          variant={"link"}
          whiteSpace="normal"
          textAlign="left"
        >
          {children.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreCard;
