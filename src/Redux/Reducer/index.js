import isLoggedIn from "./isLoggedIn" 
import SettingsTab from "./SettingsTab" 

import { combineReducers } from 'redux'



const allReducer=combineReducers({
    isLoggedIn,
    SettingsTab
})

export default allReducer