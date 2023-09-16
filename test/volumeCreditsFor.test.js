import test, {describe} from "node:test";
import assert from "node:assert/strict";
import {volumeCreditsFor} from "../utils/volumeCreditsFor.js";

describe('function volumeCreditsFor', () => {
  test('function volumeCreditsFor should return the expected volume credits of a performance', (t) => {
    // create unit test for volumeCreditsFor
    const performance = {
      playID: 'hamlet',
      audience: 55
    }
    const expected = 25;
    const actual = volumeCreditsFor(performance);
    assert.deepStrictEqual(actual, expected);
  });

  test('function volume credits for should not return the expected volume credits of a performance', (t) => {
    const performance = {
      playID: 'hamlet',
      audience: 55
    }
    const expected = 20;
    const actual = volumeCreditsFor(performance);
    assert.notDeepStrictEqual(actual, expected);
  });
});