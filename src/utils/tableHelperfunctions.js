/**
   * Route to a page displaying a graph an individual activity point data.
   *
   * @param {Object}    pointData individual activity point data for a specific date.
   * @param {Function}  router    function to navigate to other pages.

   */
const navigateToDailyPointGraph = (pointData, router) => {
  console.log("heat");
  router.push("/IndividualDailyPointGraph", { pointData: pointData });
};

/**
 * Navigate to update pointInput page for the selected pointData.
 *
 * @param {Object} pointData -- individual activity point data for a specific date.
 * @param {Function}  router    function to navigate to other pages.
 */
const navigateToUpdatePointInput = (pointData, router) => {
  console.log("heat2");

  router.push("/IndividualActivityPointUpdate", {
    activityID: pointData.activityInput_id
  });
};

export { navigateToDailyPointGraph, navigateToUpdatePointInput };
