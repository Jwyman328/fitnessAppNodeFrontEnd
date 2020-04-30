import React from "react";

const pendingChallengeInitialInvitationData = [
  {
    challengeType: "totalPoints",
    startDate: "2020-02-23T18:55:31.105Z",
    endDate: "2020-02-23T18:55:31.105Z",
    status: "pending",
    _id: "5e52e2432b87a3902678be57",
    creator: "testCreator",
    relatedChallengeId: "5e52e2432b87a3902678be56",
    invitee: "testInvitee",
    title: "try",
    __v: 0
  }
];

const pendingChallengeInvitationDataChanged = {
  challengeType: "totalPoints",
  startDate: "2020-02-23T18:55:31.105Z",
  status: "accepted",
  _id: "5e52e2432b87a3902678be57",
  creator: "footballjoe328@gmail.com",
  relatedChallengeId: "5e52e2432b87a3902678be56",
  invitee: "footballjoe32843@gmail.com",
  title: "try",
  __v: 0
};

export {
  pendingChallengeInitialInvitationData,
  pendingChallengeInvitationDataChanged
};
