const { createColClasses } = require("./create-col-classes")

describe("createColClasses", () => {
  // const breakpoints = [576, 768, 992, 1200]
  const breakpoints = [576, 768]

  it("returns all the css", () => {
    createColClasses(breakpoints)
    // const classes = createColClasses(breakpoints)
    // expect(classes).toEqual()
  })
})
