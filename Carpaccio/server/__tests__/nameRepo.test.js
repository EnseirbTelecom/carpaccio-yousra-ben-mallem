const utils = require("../functions/utils");

describe("function name",()=>{
    test("name without argument",()=>{
        expect(utils.idRepo()).toBe("Unknown")
    })
    test("name with argument",()=>{
        expect(utils.idRepo("it340")).toBe("it340")
    })
})