import { CardInterface } from "../interfaces/CardInterface";

export const removeDuplicates = (data: CardInterface[]): CardInterface[] => {
  const uniqueData = data.reduce<CardInterface[]>((acc, currentItem) => {
    const existingItem = acc.find((item) => item.uuid === currentItem.uuid);
    if (!existingItem) {
      acc.push(currentItem);
    }
    return acc;
  }, []);

  return uniqueData;
};
