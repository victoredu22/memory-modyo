import { CardInterface } from "../interfaces/CardInterface";
import { updateStateCard, updateStateFalseCard } from "../redux/states/cards";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { resetAttemp, updateAttemp } from "../redux/states/attemps";
import React, { useEffect, useState } from "react";
import {
  decrementCorrectScore,
  incrementCorrectScore,
} from "../redux/states/score";

interface CardsMapProps {
  cards: CardInterface[];
}
const CardsMap: React.FC<CardsMapProps> = ({ cards }) => {
  const dispatch = useDispatch();
  const attemps = useSelector((state: AppStore) => state.attemps);
  const [blockedButton, setBlockedButton] = useState(false);

  const handleCardChange = (card: CardInterface) => {
    dispatch(updateStateCard(card));

    if (attemps.firstAttemp.state === false) {
      dispatch(
        updateAttemp({ attemp: "first", uuid: card.uuid, stateAttemp: true })
      );
    }
    if (attemps.firstAttemp.state) {
      dispatch(
        updateAttemp({ attemp: "second", uuid: card.uuid, stateAttemp: true })
      );
    }
  };

  useEffect(() => {
    const string1 = JSON.stringify(attemps.firstAttemp);
    const string2 = JSON.stringify(attemps.secondAttemp);

    if (
      string1 === string2 &&
      attemps.firstAttemp.uuid !== "" &&
      attemps.secondAttemp.uuid !== ""
    ) {
      setBlockedButton(true);
      dispatch(resetAttemp());
      dispatch(incrementCorrectScore());
      setBlockedButton(false);
    }

    if (
      string1 !== string2 &&
      attemps.firstAttemp.uuid !== "" &&
      attemps.secondAttemp.uuid !== ""
    ) {
      setBlockedButton(true);
      setTimeout(() => {
        dispatch(resetAttemp());
        dispatch(decrementCorrectScore());
        setBlockedButton(false);
        dispatch(updateStateFalseCard(attemps.firstAttemp));
        dispatch(updateStateFalseCard(attemps.secondAttemp));
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemps]);

  return (
    <div className="row">
      <div className="col-md-12">
        <h4>Desafio Memory Modyo</h4>
      </div>

      {cards.map((card, index) => (
        <div className="col-6 col-md-3 p-2" key={index}>
          {card.state ? (
            <img
              src={card.url}
              alt="card active"
              className="img-thumbnail card__active"
            />
          ) : (
            <img
              src="assets/modyoCard.jpg"
              alt="Descripción de la imagen"
              className="img-thumbnail card__inactive"
              onClick={() =>
                !blockedButton ? handleCardChange(card) : undefined
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsMap;
