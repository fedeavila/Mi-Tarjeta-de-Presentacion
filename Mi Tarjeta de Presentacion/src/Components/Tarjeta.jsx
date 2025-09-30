import "./Tarjeta.css";

function Tarjeta({ nombre, nombreCompleto, profesion, imagen, descripcion }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="imagen" />
      <h2 className="nombre">{nombre}</h2>
      <p className="nombreCompleto">{nombreCompleto}</p>
      <h3 className="profesion">{profesion}</h3>
      <p className="descripcion">{descripcion}</p>
    </div>
  );
}

export default Tarjeta;