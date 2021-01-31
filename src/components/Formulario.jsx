import React from "react";


const Formulario = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const [lista, setLista] = React.useState([]);

  const guardarDatos = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      console.log("está vacío fruta");
      return;
    }

    if (!descripcion.trim()) {
      console.log("está vacío descripción");
      return;
    }

    console.log("procesando datos ..." + fruta + descripcion);

    setLista([...lista, 
        { nomFruta: fruta, nomDescripcion: descripcion }]
        );

    e.target.reset();
    setFruta("");
    setDescripcion("");
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={guardarDatos}>
        <input
          type="text"
          placeholder="Ingrese Fruta"
          className="form-control mb-2"
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese Descripción"
          className="form-control mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn form-control btn-primary btn-block" type="submit">
          Agregar
        </button>
      </form>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.nomFruta} - {item.nomDescripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Formulario;
