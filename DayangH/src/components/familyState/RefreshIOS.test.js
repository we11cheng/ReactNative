const RefreshIOS = require("./RefreshIOS")
// @ponicode
describe("_handleScroll", () => {
    let inst

    beforeEach(() => {
        inst = new RefreshIOS()
    })

    test("0", () => {
        let callFunction = () => {
            inst._handleScroll({ nativeEvent: { y: 520, contentOffset: 4 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._handleScroll({ nativeEvent: { y: 400, contentOffset: 18 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._handleScroll({ nativeEvent: { y: 90, contentOffset: 18 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._handleScroll({ nativeEvent: { y: 320, contentOffset: 32 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._handleScroll({ nativeEvent: { y: 550, contentOffset: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._handleScroll(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_delay", () => {
    let inst

    beforeEach(() => {
        inst = new RefreshIOS()
    })

    test("0", () => {
        let callFunction = () => {
            inst._delay()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_handleOnRefresh", () => {
    let inst

    beforeEach(() => {
        inst = new RefreshIOS()
    })

    test("0", () => {
        let callFunction = () => {
            inst._handleOnRefresh()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_endLoading", () => {
    let inst

    beforeEach(() => {
        inst = new RefreshIOS()
    })

    test("0", () => {
        let callFunction = () => {
            inst._endLoading()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_expander", () => {
    let inst

    beforeEach(() => {
        inst = new RefreshIOS()
    })

    test("0", () => {
        let callFunction = () => {
            inst._expander(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._expander("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._expander(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._expander("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst._expander(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst._expander(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
