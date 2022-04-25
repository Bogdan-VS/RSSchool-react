import { CharacterResults } from '../../services/type';

export const getCorrectDataCards = (
  cardCollection: CharacterResults[],
  male: string,
  female: string,
  genderless: string,
  unknown: string
) => {
  const maleCollection =
    male !== ''
      ? cardCollection.filter(
          ({ gender }) => gender?.toLowerCase() === male.toLowerCase()
        )
      : [];

  const femaleCollection =
    female !== ''
      ? cardCollection.filter(
          ({ gender }) => gender?.toLowerCase() === female.toLowerCase()
        )
      : [];

  const genderlessCollection =
    genderless !== ''
      ? cardCollection.filter(
          ({ gender }) => gender?.toLowerCase() === genderless.toLowerCase()
        )
      : [];

  const unknownCollection =
    unknown !== ''
      ? cardCollection.filter(
          ({ gender }) => gender?.toLowerCase() === unknown.toLowerCase()
        )
      : [];

  const correctData: CharacterResults[] = [
    ...maleCollection,
    ...femaleCollection,
    ...genderlessCollection,
    ...unknownCollection,
  ];

  return correctData;
};
