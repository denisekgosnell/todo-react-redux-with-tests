import { INIT_GAME } from "./actionTypes";

let nextGameId = 0;
export const startGame = () => ({
  type: INIT_GAME,
  payload: {
    id: ++nextGameId
   }
});
