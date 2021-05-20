import * as types from '../types'

const initialState = {
    language: 'EN',
    switching: false,
    error: null
}

export const switchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SWITCH_LANGUAGE:
            return {
                ...state,
                language: action.payload,
                switching: false,
                error: null
            }
        default: 
            return state
    }
}