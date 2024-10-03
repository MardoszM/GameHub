import { ListItem, SkeletonText } from "@chakra-ui/react";

interface Props {
  id: string;
}

const GenreCardSkeleton = ({ id }: Props) => {
  return (
    <ListItem key={id}>
      <SkeletonText />
    </ListItem>
  );
};

export default GenreCardSkeleton;
