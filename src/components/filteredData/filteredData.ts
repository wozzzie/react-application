import { CardType } from '../../types/form';

const filteredData = (data: CardType[], search: string) => {
  const lowerCaseSearch = search.toLowerCase();

  return data.filter((el) =>
    Object.entries(el).some(
      ([key, val]) =>
        typeof val === 'string' && key !== 'image' && val.toLowerCase().includes(lowerCaseSearch)
    )
  );
};

export default filteredData;
