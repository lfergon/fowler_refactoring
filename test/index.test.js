import test from 'node:test';
import assert from "node:assert/strict";
import { describe } from 'node:test';
import {playFor} from "../utils/playFor.js";

describe('test', () => {
  test('synchronous passing test', (t) => {
    // This test passes because it does not throw an exception.
    assert.strictEqual(1, 1);
  });

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

  test('synchronous failing test', (t) => {
    // This test fails because it throws an exception.
    assert.notEqual(1, 2);
  });

  test('asynchronous passing test', async (t) => {
    // This test passes because the Promise returned by the async
    // function is not rejected.
    assert.strictEqual(1, 1);
  });

  test('asynchronous failing test', async (t) => {
    // This test fails because the Promise returned by the async
    // function is rejected.
    assert.notStrictEqual(1, 2);
  });

  test('failing test using Promises', (t) => {
    // Promises can be used directly as well.
    return new Promise((resolve, reject) => {
      setImmediate(() => {
        reject(new Error('this will cause the test to fail'));
      });
    });
  });

  test('callback passing test', (t, done) => {
    // done() is the callback function. When the setImmediate() runs, it invokes
    // done() with no arguments.
    setImmediate(done);
  });

  test('callback failing test', (t, done) => {
    // When the setImmediate() runs, done() is invoked with an Error object and
    // the test fails.
    setImmediate(() => {
      done(new Error('callback failure'));
    });
  });
});
