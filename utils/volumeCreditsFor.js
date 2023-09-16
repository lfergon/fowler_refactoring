import {playFor} from "./playFor.js";

export function volumeCreditsFor(performance) {
  let volumeCredits = 0;
  volumeCredits += Math.max(performance.audience - 30, 0);
  if ('comedy' === playFor(performance).type) {
    volumeCredits += Math.floor(performance.audience / 5);
  }
  return volumeCredits;
}