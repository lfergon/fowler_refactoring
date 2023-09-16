import test, {describe} from "node:test";
import assert from "node:assert/strict";
import {volumeCreditsFor} from "../utils/volumeCreditsFor.js";
import {format} from "../utils/format.js";

describe('function format', () => {
  test('function format should return the expected format', (t) => {
    const value = 22;
    assert.equal(format(value), '$22.00');
  });

  test('function format should not return the expected format', (t) => {
    // create unit test for format function
    const value = 22;
    assert.notEqual(format(value), '$23.00');
  });
});