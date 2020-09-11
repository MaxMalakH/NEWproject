
export const fetchPosts = async () => {


  const response = await fetch ('https://postify-api.herokuapp.com/posts',{
   method:'GET',
   headers: {
     'Content-Type': 'application/json;charset=utf-8',
     'Access-Token': 'lvs78kzt0RkJ1vMkG1dZDw',
     'Client': 'ryCw1XUug5m-9X7chl9NXw',
     'Uid': 'add@gmail.com',
     'Access-Control-Allow-Origin': '*'
 }
});
  const data = await response.json();

  return data;
}

export const fetchComments = async () => {
  const response = await fetch ('https://postify-api.herokuapp.com/comments',{
   method:'GET',
   headers: {
     'Content-Type': 'application/json;charset=utf-8',
     'Access-Token': 'lvs78kzt0RkJ1vMkG1dZDw',
     'Client': 'ryCw1XUug5m-9X7chl9NXw',
     'Uid': 'add@gmail.com',
     'Access-Control-Allow-Origin': '*'
 }
});
  const data = await response.json();
  return data;
}

// FETCH ID FOR POST
export const fetchIDforPost = async (id) => {
  const response = await fetch (`https://postify-api.herokuapp.com/posts/${id}`,{
   method:'GET',
   headers: {
     'Content-Type': 'application/json;charset=utf-8',
     'Access-Token': 'lvs78kzt0RkJ1vMkG1dZDw',
     'Client': 'ryCw1XUug5m-9X7chl9NXw',
     'Uid': 'add@gmail.com',
     'Access-Control-Allow-Origin': '*'
 }
});
  const data = await response.json();

  return data;
}
