var Here = require("nativescript-here").Here;
var here = new Here();

describe("greet function", function() {
    it("exists", function() {
        expect(here.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(here.greet()).toEqual("Hello, NS");
    });
});