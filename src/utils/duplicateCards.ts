import { CardInterface } from "../interfaces/CardInterface";
import { ScoreInterface } from "../interfaces/ScoreInterface";

export const duplicateCards = (card: CardInterface[]) => {
  const duplicatedX = card.map((card) => ({
    uuid: card.uuid,
    copyUuid: true,
    url: card.url,
    state: card.state,
  }));

  const combinedCards = [...card, ...duplicatedX];

  return shuffleArray(combinedCards);
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export const roundNumber = (score: ScoreInterface, cards: CardInterface[]) => {
  const porcentScore = (score.correctScorePoints / (cards.length / 2)) * 100;
  return Math.round(porcentScore);
};
