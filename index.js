import { invoices } from "./data/invoices.js";
import { plays } from "./data/plays.js";
import { statement } from "./utils/invoicesStatements.js";

invoices.forEach(invoice => {
  statement(invoice, plays);
});