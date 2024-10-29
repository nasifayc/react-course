// Method 1
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

//   Method 2
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/10");
  const data = await res.json();
  console.log(data);
}

getData();
