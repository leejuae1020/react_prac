import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
        return console.log(json);
      });
  }, []);

  return (
    <div>
      <h3>JSONPlaceholder DATA</h3>
      {data.map((item) => {
        return (
          <div style={{ border: "1px solid black", margin: "5px" }}>
            <ul>
              <li>{item.userId}</li>
              <li>{item.id}</li>
              <li>{item.title}</li>
              <li>{item.body}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
