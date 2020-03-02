import React from 'react'

const createGraphData = (pointData) => {
    const copyPointData = {...pointData}
    delete copyPointData.date
    delete copyPointData.user
    delete copyPointData._id
    delete copyPointData.__v
    delete copyPointData.activityInput_id
    return Object.values(copyPointData)
  }

  export {createGraphData};