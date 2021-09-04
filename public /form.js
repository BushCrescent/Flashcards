document.querySelector("#add-term-form").addEventListener("submit", (event) => {
    // get the data
    const userInput = document.querySelector("#term").value;
    // contruct the data
    const dataEntry = {
      term: userInput,
    };
    //post the data to a route
    fetch("/api/create-term", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataEntry),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  