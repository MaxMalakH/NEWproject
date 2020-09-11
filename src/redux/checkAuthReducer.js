import {changeAuth} from './actions/actions'
import {changeAuthToTrue} from './actions/actions'


let initialState = {
  isAuth: !!JSON.parse(localStorage.getItem('UserData')),
}

export const checkAuthReducer = (state = initialState,action) => {
  switch(action.type){
    case 'CHECK_AUTH':
      return {...state};
    case 'GET_FULL_DATA_AUTH':
      return {...state, isAuth:true,};
    case "CHANGE_AUTH":
      return {...state, isAuth:action.payload};
    case "CHANGE_AUTH_TO_TRUE":
      return {...state, isAuth:action.payload};
    default:return state;
  }
}
