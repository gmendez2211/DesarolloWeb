import { useState } from "react";

function CrearAuthor() {
  //Variable de estaddo
  const [autor, setAutor] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); //Para no recargar la pagina
    console.log(autor);
  };

  const handleNombreAutor = (e) => {
    setAutor({ ...autor, name: e.target.value });
  };

  const handleEdadAutor = (e) => {
    setAutor({ ...autor, age: e.target.value });
  };

  //Consumo del API con la petición HTTP Post
  const fetchData = async () => {
    fetch("https://test-deploy-12.onrender.com/authors", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: autor.name,
        age: autor.age,
      }),
    }).then((response) => response.json());
  };
  return (
    <div className="container-sm border border-3 rounded-1">
      <h1>Creación de autores</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ej. Pedro"
            onChange={handleNombreAutor}
            value={autor.name}
          />
          <label htmlFor="name">Nombre de autor</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Ej. 35"
            onChange={handleEdadAutor}
            value={autor.age}
          />
          <label htmlFor="age">Edad</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-25"
          onClick={fetchData}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CrearAuthor;
