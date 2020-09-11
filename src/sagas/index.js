import { put, takeLatest, all, call } from 'redux-saga/effects';
import {fetchPosts,fetchComments,fetchIDforPost} from './api'

// Saga for sending ID and getting data for one post with comments
function* sendPostID (action) {
  const dataID = yield call(fetchIDforPost, action.payload);
  yield put({ type: "ONE_POST",payload:dataID});
}
// watcher saga
function* actionWatcher4() {
  yield takeLatest('FETCH_ID_POST_FOR_EDIT', sendPostID);
}
///// We are getting posts on loading Main page
// worker saga
function* getComments (action) {
  const comments = yield call(fetchComments);
  yield put({ type: "COMMENTS_RECEIVED",comments:comments});
}
// watcher saga
function* actionWatcher3() {
     yield takeLatest('GET_COMMENTS', getComments)
}

///// We are getting posts on loading Main page
// worker saga

function* getPost (action) {
  const posts = yield call(fetchPosts);
  yield put({ type: "RESPONSE_RECEIVED",fetchedPostsSuccess:posts, fetchedPostAlready:'fetchedPostAlready'});
}
// watcher saga
function* actionWatcher2() {
     yield takeLatest('GET_POST', getPost)
}



// Sending Data from authorization form!!!!
function* sendData (action) {

  let object;
  let data = {
    firs_name: action.payload.first_name,
    last_name: action.payload.last_name,
    email: action.payload.email,
    password: action.payload.password,
    passwrod_confirmation:action.payload.passwrod_confirmation,
  }
  let headersObj = {}
  /////////////////////////////////////////////////////////
  const json = yield fetch('https://postify-api.herokuapp.com/auth',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*'
  },
    body: JSON.stringify(data)
  })
    .then(response => { headersObj = {
    content:response.headers.get('Content-Type'),
    accessT:response.headers.get('Access-Token'),
    client:response.headers.get('Client'),
    uid:response.headers.get('Uid'),
    access:response.headers.get('Access-Control-Allow-Origin'),
  };
    return response.json();

  });

/////////////////////////////////////////////////////////////////////
  yield put({ type: "RESPONSE_RECEIVED",dataLogin:json});
  yield localStorage.setItem('UserData',JSON.stringify(json));
   yield localStorage.setItem('AuthData',JSON.stringify(headersObj));
}




function* actionWatcher() {
     yield takeLatest('SEND_DATA_FOR_SIGNUP', sendData)
}




// Sending Data from SignIn form!!!!
function* postData(action) {
  let data = {
    email: action.payload.email,
    password: action.payload.password,
  }
  let headersObj = {}
  /////////////////////////////////////////////////////////
  const json = yield fetch('https://postify-api.herokuapp.com/auth/sign_in',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*'
  },
    body: JSON.stringify(data)
  })
    .then(response => { headersObj = {

    accessT:response.headers.get('Access-Token'),
    client:response.headers.get('Client'),
    uid:response.headers.get('Uid'),
    access:response.headers.get('Access-Control-Allow-Origin'),
  };
    return response.json();

  });
/////////////////////////////////////////////////////////////////////////
  yield put({ type: "RESPONSE_RECEIVED",payload:json, loginSuccess:'loginSuccess'});
  yield localStorage.setItem('UserData',JSON.stringify(json));
  yield localStorage.setItem('AuthData',JSON.stringify(headersObj));
  yield console.log(JSON.parse(localStorage.getItem('AuthData')).accessT)
  yield console.log(JSON.parse(localStorage.getItem('AuthData')).client)
  yield console.log(JSON.parse(localStorage.getItem('AuthData')).uid)
  yield console.log(typeof JSON.parse(localStorage.getItem('AuthData')).accessT)
  yield console.log(typeof JSON.parse(localStorage.getItem('AuthData')).client)
  yield console.log(typeof JSON.parse(localStorage.getItem('AuthData')).uid)
  yield console.log(JSON.parse(localStorage.getItem('AuthData')))
}
function* actionWatcher1() {
     yield takeLatest('GET_EMAIL', postData)
}
// Sending Data from POSTFORM !!!!
function* postDatafromPostForm(action) {
  let data = {
    title: action.payload.title,
    description: action.payload.description,

  }
  const json = yield fetch('https://postify-api.herokuapp.com/posts',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Token': JSON.parse(localStorage.getItem('AuthData')).accessT,
      'Client': JSON.parse(localStorage.getItem('AuthData')).client,
      'Uid': JSON.parse(localStorage.getItem('AuthData')).uid,
      'Access-Control-Allow-Origin': '*'
  },
    body: JSON.stringify(data)
  })
        .then(response => response.json(),)
  yield put({ type: "RESPONSE_RECEIVED",DataFromPostForm:json, createPost: 'createPost'});
}
function* actionWatcher5() {
     yield takeLatest('SEND_DATA_FROM_POSTFORM', postDatafromPostForm)
}
// SENDING DATA with NEW COMMENT  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
function* sendDataNewComment(action) {
    console.log('action.comID', action.payload.commentable_id)
    let data = {
    message: action.payload.message,
    commentable_id: +action.payload.commentable_id,
    commentable_type: action.payload.commentable_type,
  }
  console.log(data)
  const json = yield fetch('https://postify-api.herokuapp.com/comments',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Token': JSON.parse(localStorage.getItem('AuthData')).accessT,
      'Client': JSON.parse(localStorage.getItem('AuthData')).client,
      'Uid': JSON.parse(localStorage.getItem('AuthData')).uid,
      'Access-Control-Allow-Origin': '*'
  },
     body: JSON.stringify(data)
  })
     .then(response => response.json(), );
     console.log(json)
     yield put({ type: "RESPONSE_RECEIVED",DataFromAction:json, createComment: 'createComment'});

}
function* actionWatcher6() {
     yield takeLatest('CREATE_NEW_COMMENT', sendDataNewComment)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   actionWatcher1(),
   actionWatcher2(),
   actionWatcher3(),
   actionWatcher4(),
   actionWatcher5(),
   actionWatcher6(),
   ]);
}
