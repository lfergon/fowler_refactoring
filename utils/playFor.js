import {plays} from "../data/plays.js";

export function playFor(performance) {
  return plays[performance.playID];
}