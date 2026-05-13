import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy}) {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} />
      ))}
    </div>
  );
}

export default ToyContainer;