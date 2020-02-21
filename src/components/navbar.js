import React from 'react'
import {withRouter} from "react-router-dom";

/**
 * Nav bar for page to navigate to other pages.
 * @param {*} props -- accept history from withRouter
 */
function MainNavBar(props){
    const handleClick = (destination) => {
        props.history.push(destination)
    }
    return(
  <div>    
    < button data-testid='navigateToHome' onClick={() => handleClick('/Home')}>Home</ button>
    < button data-testid='navigateToInputPoints'  onClick={() => handleClick('/inputPoints')}>Input Points</ button>
    < button data-testid='navigateToSignUp' onClick={() => handleClick('/signUp')}>Sign up</ button>
    < button data-testid='navigateToLogin' onClick={() => handleClick('/login')}>Log in</ button>
    < button data-testid='navigateGoalPage' onClick={() => handleClick('/GoalPage')}>Goals</ button>
    < button data-testid='navigateToChallenges' onClick={() => handleClick('/Challenges')}>Challenges</ button>
    < button data-testid='navigateViewResults' onClick={() => handleClick('/ViewResults')}>ViewResults</ button>
      < button data-testid='navigateToHowTo' onClick={() => handleClick('/HowTo')}>How to</ button>
      < button data-testid='navigateToLogOut' onClick={() => handleClick('/logOut')}>Log out</ button>
  </div>
  )
}
export default  withRouter(MainNavBar);
