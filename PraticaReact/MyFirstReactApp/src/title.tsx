function title() {
  let sNombre = "Gustavo";
  if (sNombre != "") {
    return <p>Desarrollo Web Mi nombre es: {sNombre}</p>;
  } else {
    return <p>Desarrollo Web</p>;
  }
}

export default title;
