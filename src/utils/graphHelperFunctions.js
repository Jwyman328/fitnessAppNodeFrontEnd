import React from "react";

/**
 * Remove unnecessary pointData properties in order to create graph data with returned object.
 *
 * @param  {Object}  pointData pointData object containing all properties of a activity pointData object.
 * @return {Object}  new pointData object will removed properties to be used to createGraphData
 */
//activityInput_id: "5eab076576a31f0019b4e7e2"

const createGraphData = pointData => {
  const copyPointData = { ...pointData };
  delete copyPointData.date;
  delete copyPointData.user;
  delete copyPointData._id;
  delete copyPointData.__v;
  delete copyPointData.activityInput_id;

  return Object.values(copyPointData);
};

export { createGraphData };
