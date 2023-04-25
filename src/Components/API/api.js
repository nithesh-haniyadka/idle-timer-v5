import axios from "axios";

export const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    return { data };
  };


  // export const fetchUsers2 =()=>{
  //   return fetch ("https://jsonplaceholder.typicode.com/users/").then((response)=>{
  //     console.log("response",response)
  //     if(response.status=200) return response.json();
  //     else throw new Error("invalid response")
  //   })
  // }

