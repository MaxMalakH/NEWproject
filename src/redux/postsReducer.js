
export const postsReducer = (state = [],action) => {
  switch(action.type){
    case 'POST_DATA':
      return {...state,loading:'You made post/request',};
    case 'RESPONSE_RECEIVED':
      if (action.createPost) {
        const {DataFromPostForm} = action;
        return {...state, loading:'ITS DONE',posts:[DataFromPostForm, ...state.posts], dataLogin:action.payload};
      }
      if(action.createComment) {
        return {...state ,comments:[action.DataFromAction, ...state.comments], dataLogin:action.payload};
      }
      if(action.fetchedPostAlready) {
        return {...state, posts:action.fetchedPostsSuccess};
      }
      return {...state, loading:'ITS DONE',loginResponse:action.payload,};
    case 'GET_EMAIL':
      return {...state, email:action.payload,};
    case "SEND_DATA_FOR_SIGNUP":
       return {...state,email:action.payload};
    case "GET_POST":
       return {...state};
    case "GET_COMMENTS":
      return {...state};
    case "COMMENTS_RECEIVED":
       return {...state, comments:action.comments};
    default:return state;
  }
}
