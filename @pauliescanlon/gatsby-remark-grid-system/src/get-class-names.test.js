const { getClassNames } = require("./get-class-names")

describe("getClassNames", () => {
  it("adds the correct class names for the breakpoints proivded by markdown", () => {
    expect(getClassNames("col 12|6|7|5")).toEqual(
      "col-12 col-sm-12 col-md-6 col-lg-7 col-xl-5"
    )
  })
  it("add no class names if breakpoints are not provided by markdown", () => {
    expect(getClassNames("")).toEqual("")
    expect(getClassNames("col")).toEqual("")
  })
})
