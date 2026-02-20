fetch("contestants.json")
    .then(response => response.json())
    .then(contestants => {
        console.log(contestants);
        console.log(contestants[0].id);
    });