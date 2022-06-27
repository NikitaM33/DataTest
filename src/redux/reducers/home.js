import { SET_TABLE_DATA } from '../constants';

const initialState = {
    clientData: []
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_DATA:

            return {
                ...state,
                clientData: action.payload
            }

        default:
            return state
    }
}

export default home;