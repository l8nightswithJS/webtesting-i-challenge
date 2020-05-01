const {repair, succeed, fail, get} = require('./enhancer.js');
// test away!

const item = {
    name: "reset durability",
    durability: 0,
    enhancement: 1,
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
    enhancement: 15,
}

const itemFailTenTwo = {
    name: "subtract 10 from durability and subtract 1 from enhancement",
    durability: 100,
    enhancement: 16,
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
        it('should create new item with 5 subtracted from durability', () => {
            const testFail = fail(itemFailFive);
            expect(testFail.durability).toEqual(95);
        });

        it('should create new item with an updated enhancement if enhancement > 15', () => {
            const testFailTwo = fail(itemFailTen);
            expect(testFailTwo.enhancement).toEqual(15);
        });

        it('should create new item with an updated durability and enhancement', () => {
            const testFailThree = fail(itemFailTenTwo);
            expect(testFailThree.durability).toEqual(90);
        });
    });

    describe('get()', () => {
        it('should create new item with a name of "[1] Item Sword"', () => {
            const testName = get(item);
            expect(testName.name).toMatch('[1] Iron Sword') 
        })
    })
});
