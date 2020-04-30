import React from "react";
import { createGraphData } from "../../utils/graphHelperFunctions";
import {
  createGraphDataMockPointData,
  sanitizedCreateGraphMockData
} from "../helper_functions_for_tests/testMockData/testMockDataUtils/createGraphDataMockPointData";

test("graph healper function removes unneeded object properties", () => {
  createGraphData(createGraphDataMockPointData);
  expect(createGraphDataMockPointData).toBe(sanitizedCreateGraphMockData);
});
