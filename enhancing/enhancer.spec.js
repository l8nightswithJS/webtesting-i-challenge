const {repair, succeed, fail, get} = require('./enhancer.js');
// test away!

const item = {
    name: "reset durability",
    durability: 0,
    enhancement: 0,
}

const itemSuccess = {
    name: "add to durability",
    durability: 0,
    enhancement: 19,
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
            expect(testSuccess.enhancement).toEqual(20);
        });
    });
});
