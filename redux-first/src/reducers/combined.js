import {combineReducers} from 'redux'
import { sendDataToMyComp } from './firstReducer'
import { sendDataToNameComp } from './firstReducer'


export const NewStore = combineReducers({
    first : sendDataToMyComp,
    second : sendDataToNameComp
})