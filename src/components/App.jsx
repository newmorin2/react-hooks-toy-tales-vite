import React, {useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }
  function deleteToy(id) {
  setToys((prev) =>
    prevToys.filter((toy) => toy.id !== id)
  );
  }
  function updateToy(updatedToy) {
  setToys((prev) =>
    prev.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    )
  );
}


  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateToy={updateToy} />
    </>
  );
}

export default App;
