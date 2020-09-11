export const sendIdReducer = (state = [],action) => {
  switch(action.type){
    case 'SEND_POST_ID':
    
      return {...state,IdForRequestingData:action.payload,};
    case 'ID_POST_SUCCESS':
      return {...state, IDforPost: action.payload,}
    case 'FETCH_ID_POST_FOR_EDIT':
      return {...state, PostID:action.payload};
    case 'ONE_POST':
      return {...state, IdIsgot:action.payload};
    case "LOAD_ID_COMMENT":
       return {...state, IdComment:action.payload};
    case "SEND_DATA_FROM_POSTFORM":
        return {...state, MyPost:action.payload};
    case "CREATE_NEW_COMMENT":
         return {...state, MyComment:action.payload};

    default:return state;

  }
}
