fetch("data/house.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });


  