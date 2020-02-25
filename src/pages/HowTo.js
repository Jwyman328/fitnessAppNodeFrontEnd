import React from 'react';
import {Link} from 'react-router-dom'
function HowTo(props) {
    return (
        <div>
            How To
        
        <h2> How to: Fitness Challenge</h2>
        <br></br>

        <h3> Step 1: Create a User: <Link to='/signup' >Signup  </Link>{/*signup */}  </h3>
      
       
        <h3> Step 2: Compete against expectations: <Link to='/GoalPage' >Create Goal  </Link>  </h3>
        <ul>
            <li> Create daily point goals to see if you can beat your expectations </li>

        </ul>
        
        <h3> Step 3: Start Tracking: <Link to='/inputPoints' >Signup  </Link></h3>
        <ul>
        <li> Input your health data to generate points, including sleeping hours, workout time, steps, water and more </li>
        <br></br>
        </ul>

        
        <h3> Step 4: View Results:{/*view results */}</h3>
        <ul>
        <li> View your health data graphs, tables and statistics  </li>
        <br></br>
        </ul>

        
        <h3> Step 5: Create and Compete in Challenges: <Link to='/Challenges' >Create Challenge </Link>  </h3>
        <ul>
        <li> Create a challenge for any fitness category and Invite your friends to compete</li>
        <li> Accept challenge invitations from others: <Link to='/PendingChallenges'>Pending challenges</Link></li>
        <li> View current challenge data and leader board standings for each challenge:<Link to='/CurrentFutureChallenges'>Current challenges</Link></li>
        </ul>
        </div>
    );
}

export default HowTo;