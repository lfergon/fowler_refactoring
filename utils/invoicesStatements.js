import {amountFor} from "./calculationInvoices.js";
import {playFor} from "./playFor.js";
import {volumeCreditsFor} from "./volumeCreditsFor.js";
import {format} from "./format.js";

export function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // add volume credits
    volumeCredits += volumeCreditsFor(perf);
    // print line for this order
    result += ` ${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}