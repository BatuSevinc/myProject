import axios from "axios";

// (async () =>{
//   const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
  
//   const {data: post1} = await axios("https://jsonplaceholder.typicode.com/psts/1");
//   const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2")

//   console.log("users",users); 
//   console.log("post1",post1);
//   console.log("post2",post2)

// })();

const getComments = () => {
  return new Promise((resolve,reject) => {
    resolve({text : "selam"});
  });
};

getComments().then((data) => console.log(data))
.catch((e) => console.log(e))