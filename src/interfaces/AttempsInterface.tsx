import { CardInterface } from "./CardInterface";

export interface AttempsInterface {
  firstAttemp: Pick<CardInterface, "uuid" | "state">;
  secondAttemp: Pick<CardInterface, "uuid" | "state">;
}
