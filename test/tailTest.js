const assertEqual = require('../assertEqual');
const tail = require('../tail');
const {assert} = require('chai');

describe("", () => {
  it("return ['Lighthouse', 'Labs']", () => {
    let ace = ["Hello", "Lighthouse", "Labs"];
    const result = tail(ace);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });

  it("return empty when given 1 element array", () => {
    let spade = [6];
    const result = tail(spade);
    assert.strictEqual(result[0], undefined);
  });

  it("return empty when given empty array", () => {
    let club = [];
    const result = tail(club);
    assert.strictEqual(result[0], undefined);
  });

});

