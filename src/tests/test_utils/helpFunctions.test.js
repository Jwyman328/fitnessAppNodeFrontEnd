import {
  formatDate,
  sanitizeSingleDateValue
} from "../../utils/helperFunctions";

test("formatDate turns date object into yyyy-mm-dd string", () => {
  const fullDateObj = new Date("2020-04-30T20:33:03.365Z");
  const yyyyMmDdOfFullDateObj = formatDate(fullDateObj);
  expect(yyyyMmDdOfFullDateObj).toBe("2020-04-30");
});

test("remove time portion of full date value", () => {
  const fullDateObjWithOutTime = sanitizeSingleDateValue(
    "2020-04-30T20:33:03.365Z"
  );
  expect(fullDateObjWithOutTime).toBe("2020-04-30");
});
