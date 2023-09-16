import test, {describe} from "node:test";
import {playFor} from "../utils/playFor.js";
import assert from "node:assert/strict";

describe('function playFor', () => {
  test('function playFor should return the play for a performance', (t) => {
    const performance = {
      playID: 'hamlet',
      audience: 55
    }
    const expected = {
      name: 'Hamlet',
      type: 'tragedy'
    }
    const actual = playFor(performance);
    assert.deepStrictEqual(actual, expected);
  });

  test('function playFor should not return the play for a performance', (t) => {
    const performance = {
      playID: 'hamlet',
      audience: 55
    }
    const expected = {
      name: 'hamlet',
      type: 'comedy'
    }
    const actual = playFor(performance);
    assert.notDeepStrictEqual(actual, expected);
  });
});