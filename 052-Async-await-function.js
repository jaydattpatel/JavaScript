/*
Author : Jaydatt Patel

Async function : The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

*/

function hold() {
    return new Promise((resolve) => {
        console.log('On Hold');
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
    });
  }
  
  async function asyncCall() {
      console.log('calling');
      const result = await hold();
      console.log(result);
  }
  
  asyncCall();
      


  