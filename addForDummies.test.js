const addForDummies = require("./addForDummies");

test("10 alatti egesz eseten az eredmenyt kapjuk vissza.", () => {
  expect(addForDummies(4, 4)).toBe(8);
});

test("0 alatti eredmeny eseten 0-t kapjunk vissza.", () => {
  expect(addForDummies(-24, 4)).toBe(0);
});
