import usePlatforms from "./usePlatforms";

const usePlatform = (id: number | null) => {
    const platforms = usePlatforms();
    return platforms.data?.results.find(x => x.id === id);
}

export default usePlatform;