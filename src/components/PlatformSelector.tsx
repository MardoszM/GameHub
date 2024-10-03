import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platformsName = "Platforms";
  const selectedPlatformId = useGameQueryStore((x) => x.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((x) => x.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId ?? null);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? platformsName}
      </MenuButton>
      <MenuList>
        <MenuItem key={null} onClick={() => setPlatformId(null)}>
          {platformsName}
        </MenuItem>
        {data?.results.map((x) => (
          <MenuItem key={x.id} onClick={() => setPlatformId(x.id)}>
            {x.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
