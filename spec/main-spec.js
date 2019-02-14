const main = require('../main/main');

describe('taxi fee', function () {
    it("taxi driving 2 km no waiting ", function(){
        var input = {distance: 2, wait: 0}
        var result = main(input);
        var expect_value = 6;
        expect(expect_value).toEqual(result)
    })
    it("taxi driving 2 km and waiting 5 min ", function(){
        var input = {distance: 2, wait: 5}
        var result = main(input);
        var expect_value = 7;
        expect(expect_value).toEqual(result)
    })
    it("taxi driving 5 km and no waiting", function(){
        var input = {distance: 5, wait: 0}
        var result = main(input);
        var expect_value = 8;
        expect(expect_value).toEqual(result)
    })
    it("taxi driving 5 km and waiting 5 min ", function(){
        var input = {distance: 5, wait: 5}
        var result = main(input);
        var expect_value = 10;
        expect(expect_value).toEqual(result)
    })
    it("taxi driving 8 km and waiting 5 min ", function(){
        var input = {distance: 8, wait: 5}
        var result = main(input);
        var expect_value = 12;
        expect(expect_value).toEqual(result)
    })
});
