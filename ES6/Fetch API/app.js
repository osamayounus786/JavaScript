

// fetch("readme.txt") // your content file is here i
// .then((response)=> response.text())
// .then((data)=> document.write(data)
// );



// fetch("https://jsonplaceholder.typicode.com/posts") // fake JSON file format
// .then((response)=> response.json())
// .then((data)=> console.log(data)
// );



fetch("https://jsonplaceholder.typicode.com/posts") // fake JSON file format
.then((response)=> response.json())
.then((data)=> {
    console.log(data);
    for(var x in data){
            
            console.log(x)
            console.log(`${data[x].title}`)
            
    }
}
);