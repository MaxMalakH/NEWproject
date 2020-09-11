export const postRequest = () => ({
  type:'POST_DATA',
});

export const getEmail = (email,password)=> ({
  type:"GET_EMAIL",
  payload:{email,password},
});

export const sendDataForSignUp = (email,password,passwrod_confirmation,first_name, last_name) => ({
  type: "SEND_DATA_FOR_SIGNUP",
  payload:{email,password,passwrod_confirmation,first_name,last_name},
})
// Loading posts when you on Main page
export const getNewPost = () => ({
  type:"GET_POST",
})
// Loading comments when you on Main per_page
const getNewComments = () =>({
  type:"GET_COMMENTS",
});
export {getNewComments};

// Send id to post components
const sendPostId = (id) =>({
  type:"SEND_POST_ID",
  payload:id,
});
export {sendPostId};

const checkAuth = () => ({
  type: "CHECK_AUTH",
})
export {checkAuth};

const getFullDataAuth = () => ({
  type: "GET_FULL_DATA_AUTH",
})
export {getFullDataAuth};

const clearLogout = () => ({
  type: "CLEAR_LOGOUT",
})

export {clearLogout};

// Create a new comment and send data
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const createNewComment = (message,commentable_id,commentable_type) => ({
  type:"CREATE_NEW_COMMENT",
  payload:{message:message,commentable_id,commentable_type},
})
export {createNewComment};

const changeAuth = () => ({
  type:"CHANGE_AUTH",
  payload: false,
})
export {changeAuth};

const changeAuthToTrue = () => ({
  type:"CHANGE_AUTH_TO_TRUE",
  payload:true,
})
export {changeAuthToTrue};
