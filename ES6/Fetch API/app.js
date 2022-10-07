

fetch("readme.txt") // your content file is here i
.then((response)=> response.text())
.then((data)=> document.write(data)
);



fetch("https://jsonplaceholder.typicode.com/posts") // fake JSON file format
.then((response)=> response.json())
.then((data)=> console.log(data)
);