import React from "react";
import { Table } from "react-bootstrap";
import PastChallengesRow from "../rows/pastChallengesRow";
import PastChallengeTableHead from "../heads/pastChallengeTableHead";

function ChallengeTable({ challengeData }) {
  /**
   * Create an array of challenge cards from challenge data.
   *
   * @param {Array} challenges -- all challenge data.
   */
  const createChallengeCards = challenges => {
    const challengeCards = challenges.map(challenge =>
      PastChallengesRow(challenge)
    );
    return challengeCards;
  };

  return (
    <div>
      <Table className="tableContainer">
        <PastChallengeTableHead />
        <tbody>{createChallengeCards(challengeData)}</tbody>
      </Table>
    </div>
  );
}

export default ChallengeTable;
