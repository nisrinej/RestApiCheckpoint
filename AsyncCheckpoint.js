//Task1
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Example usage
 // iterateWithAsyncAwait([1, 2, 3, 4, 5]);

 //Task2 and 3
 async function awaitCall() {
    // Simulating an API call with a delay
    const fetchData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: "Here is your simulated API data!" });
        }, 2000); // Simulates a 2-second delay
      });
    };
  
    // Awaiting the simulated API call
    try{
        const data = await fetchData();
        console.log(data);
    }catch(error){
        console.error("this operation fails:", error.message);

    }
}

awaitCall();

//task 4
async function concurrentRequests() {

    const fetchData1 = new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: "Result from API 1" });
      }, 2000); // Simulates a 2-second delay
    });
  
    const fetchData2 = new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: "Result from API 2" });
      }, 3000); // Simulates a 3-second delay
    });
  
    try {
      const results = await Promise.all([fetchData1, fetchData2]);
      console.log("Combined Results:", results);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  concurrentRequests();
  
