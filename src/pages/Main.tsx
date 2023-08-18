import React, { useEffect, useState } from "react";

import { duplicateCards } from "../utils/duplicateCards";
import { CardInterface } from "../interfaces/CardInterface";
import { useDispatch, useSelector } from "react-redux";
import { loadCards } from "../redux/states/cards";
import { AppStore } from "../redux/store";
import CardsMap from "../components/CardsMap";
import { getUser } from "../utils/localstorage";
import Modal from "../components/Modal";
import NewUser from "../components/NewUser";
import { apiHelper } from "../utils/HttpManagementService";
import { FinalScore } from "../components/FinalScore";
import { ScoreBoard } from "../components/ScoreBoard";

export const Main = () => {
  const [listCard, setListCard] = useState<CardInterface[]>([]);
  const [openedModal, setOpenedModal] = useState<boolean>(false);

  const [openedModalScore, setOpenedModalScore] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cards = useSelector((state: AppStore) => state.cards);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiHelper.get(
          "content/spaces/animals/types/game/entries?per_page=20",
          {}
        );

        const userData = data.entries.map((data: any) => ({
          uuid: data.meta.uuid,
          url: data.fields.image.url,
          copyUuid: false,
          state: false,
        }));

        setListCard(duplicateCards(userData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const userLocalStorage = getUser();
    if (!userLocalStorage || null) setOpenedModal(true);
  }, []);

  useEffect(() => {
    if (listCard.length > 0) dispatch(loadCards(listCard));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCard.length]);

  const closeModal = () => {
    setOpenedModal(false);
  };
  const closeModalScore = () => {
    setOpenedModalScore(false);
  };
  return (
    <div className="container mt-2">
      <Modal open={openedModal}>
        <NewUser close={closeModal} />
      </Modal>
      <Modal open={openedModalScore}>
        <FinalScore close={closeModalScore} />
      </Modal>
      <div className="row">
        <div
          className="col-md-8 p-4 order-2 order-md-1"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.0.5)",
          }}
        >
          <CardsMap cards={cards} />
        </div>
        <div
          className="col-md-3 ml-2 p-4 order-1 order-md-2"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginLeft: "2%",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.0.5)",
            height: "300px",
            marginBottom: "20px",
          }}
        >
          <ScoreBoard setOpenedScore={setOpenedModalScore} />
        </div>
      </div>
    </div>
  );
};
