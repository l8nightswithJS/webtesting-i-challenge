const {repair, succeed, fail, get} = require('./enhancer.js');
// test away!

const item = {
    name: "reset durability",
    durability: 0,
    enhancement: 0,
}

const itemSuccess = {
    name: "add to enhancement",
    durability: 0,
    enhancement: 1,
}

const itemFailFive = {
    name: "subtract five from durability",
    durability: 100,
    enhancement: 1,
}

const itemFailTen = {
    name: "subtract 10 from durability and subtract 1 from enhancement",
    durability: 100,
    enhancement: 18,
}

it('true should be true', () => {
    expect(true).toBe(true);
});

describe('jest testing', () => {
    describe('repair()', () => {
        it('should equal durability to 100', () => {
            const test = repair(item);
            expect(test.durability).toEqual(100)
        });
    });
    describe('success()', () => {
        it('should create new item with an added enhancement', () => {
            const testSuccess = succeed(itemSuccess);
            expect(testSuccess.enhancement).toEqual(2);
        });
    });
    describe('fail()', () => {
        it('should create new item with an added enhancement', () => {
            const testFail = fail(itemFailFive);
            const testFailTwo = fail(itemFailTen);
            expect(testFail.durability).toEqual(95);
            expect(testFailTwo.durability).toEqual(90);
            expect(testFailTwo.enhancement).toEqual(17);
        });
    });
});
