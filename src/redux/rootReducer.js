import {combineReducers} from 'redux'
import {postsReducer} from './postsReducer'
import {sendIdReducer} from './sendIdReducer'
import {checkAuthReducer} from './checkAuthReducer'

export const rootReducer = combineReducers({
    posts: postsReducer,
    idForSend: sendIdReducer,
    Authorization:checkAuthReducer,
})
