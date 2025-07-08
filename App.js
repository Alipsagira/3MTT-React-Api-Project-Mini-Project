import React, { useEffect, useState} from "react";
import ListComponent from "./ListComponent";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Sample API
.then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
})
.then((data) => {
        setItems(data);
        setLoading(false);
})
.catch((err) => {
        setError(err.message);
        setLoading(false);
});
}, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ListComponent items={items} />
    </div>
);
};

export default App;
