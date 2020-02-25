import React from "react";

function Rules(props) {
  return (
    <div>
      Rules
      <div >
        <div >
          <div >
            <div >
              <h2>Scoring System</h2>
            </div>
            <ul >
              <li >
                Clean Eating Points: Eat Clean the entire day, 10 points
              </li>
              <li >
                Sleep Points: Hours of Sleep * 3.3
              </li>
              <li >
                Workout Points: Workout intensity * (Workout minutes * .2)
              </li>
              <li >
                Water Points: 100 oz of water, 10 points
              </li>
              <li >Step Points: Steps * .001</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
