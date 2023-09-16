import {playFor} from "./playFor.js";

export function amountFor(performance) {
  let result = 0;
  const performanceAudience = performance.audience;
  switch (playFor(performance).type) {
    case 'tragedy':
      result = 40000;
      if (performanceAudience > 30) {
        result += 1000 * (performanceAudience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (performance.audience > 20) {
        result += 10000 + 500 * (performanceAudience - 20);
      }
      result += 300 * performanceAudience;
      break;
    default:
      throw new Error(`unknown type: ${playFor(performance).type}`);
  }
  return result;
}