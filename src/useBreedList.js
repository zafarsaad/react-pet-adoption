import { useGetBreedsQuery } from "./petApiService";

export default function useBreedList(animal) {
  const { data: breeds, isloading } = useGetBreedsQuery(animal, {
    skip: !animal
  });

  if (!animal) {
    return [[], 'loaded'];
  }

  return [breeds ?? [], isloading ? "loading" : "loaded"];
}
