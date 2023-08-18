import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { getUser } from "../utils/localstorage";
import { roundNumber } from "../utils/duplicateCards";

interface ContainerProps {
  setOpenedScore: Dispatch<SetStateAction<boolean>>;
}

export const ScoreBoard: React.FC<ContainerProps> = ({ setOpenedScore }) => {
  const score = useSelector((state: AppStore) => state.scores);
  const cards = useSelector((state: AppStore) => state.cards);

  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    const scoreClean = roundNumber(score, cards);
    setTotalProgress(scoreClean);
    if (scoreClean === 100) setOpenedScore(true);
  }, [score, cards, setOpenedScore]);

  return (
    <>
      <div className="text-center">
        <h5>Tablero Progreso</h5>
        <hr></hr>
      </div>
      <div>
        <p style={{ fontWeight: "bold", marginRight: "0px" }}>
          Jugador: <span style={{ fontWeight: "500" }}>{getUser()}</span>
        </p>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
        <div className="d-flex justify-content-between">
          <div>{totalProgress}%</div>
          <div>100%</div>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex">
            {" "}
            <i
              className="bi bi-check-circle"
              style={{ fontSize: "1.6rem", color: "#0DCAF0" }}
            ></i>
            <p
              style={{
                fontWeight: "bold",
                marginRight: "20px",
                marginTop: "7px",
                marginLeft: "5px",
              }}
            >
              Aciertos:
              <span style={{ fontWeight: "500" }}>
                {" "}
                {score.correctScorePoints}
              </span>
            </p>
          </div>
          <div className="d-flex">
            <i
              className="bi bi-x-circle text-danger"
              style={{ fontSize: "1.6rem" }}
            ></i>
            <p
              style={{
                fontWeight: "bold",
                marginRight: "20px",
                marginTop: "7px",
                marginLeft: "5px",
              }}
            >
              Errores:
              <span style={{ fontWeight: "500" }}>
                {score.incorrectScorePoints}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
