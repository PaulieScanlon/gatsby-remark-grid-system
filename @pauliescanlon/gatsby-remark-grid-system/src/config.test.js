const { colWidths, classPrefixes } = require("./config")

describe("config", () => {
  it("contains the correct col width values", () => {
    expect(colWidths[0].percent).toEqual(8.333333)
    expect(colWidths[1].percent).toEqual(16.666667)
    expect(colWidths[2].percent).toEqual(25)
    expect(colWidths[3].percent).toEqual(33.333333)
    expect(colWidths[4].percent).toEqual(41.666667)
    expect(colWidths[5].percent).toEqual(50)
    expect(colWidths[6].percent).toEqual(58.333333)
    expect(colWidths[7].percent).toEqual(66.666667)
    expect(colWidths[8].percent).toEqual(75)
    expect(colWidths[9].percent).toEqual(83.333333)
    expect(colWidths[10].percent).toEqual(91.666667)
    expect(colWidths[11].percent).toEqual(100)
  })
  it("contains the correct class name prefixes", () => {
    expect(classPrefixes).toEqual(["", "sm-", "md-", "lg-", "xl-"])
  })
})
