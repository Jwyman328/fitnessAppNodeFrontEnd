import React, {useEffect, useReducer, useContext} from 'react';
import { store } from "../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../utils/helperFunctions";
import pastChallengePageReducer from "../reducers/pastChallengePageReducer";
import initialState from '../initialState/pastChallengeInitialState'
import getPastChallenges from '../actions/pastChallengesActions/getPastChallenges'
import PastChallengesCard from '../components/pastChallengesCard'

/**
 * Display all past challenges.
 * @param {*} props 
 */
function PastChallenges(props) {
    const globalState = getGlobalState(useContext(store));

    const [state, dispatch] = useReducer(pastChallengePageReducer, initialState)
    const {isLoading, isError, pastChallenges} = state;
    
    useEffect(() => {
       getPastChallenges(dispatch, globalState.token)  
    },[])

    const createPastChallengesCards = () => {
        const pastChallengesCards = pastChallenges.map(pastChallenge => PastChallengesCard(pastChallenge))    
        return pastChallengesCards
    }

    return (
        <div>
            past challenges
            {pastChallenges? createPastChallengesCards() : null }
            {isLoading? <div>loading past challenges </div> :null}
            {isError? <div data-testid='isError'>Error loading past challenges</div> :null}
        </div>
    );
}

export default PastChallenges;