//Imprimir una lista de componentes
//Interface para definir propiades
type Props = {
  data: string[];
};
function List({ data }: Props) {
  /*return (
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>*/
  //Para devolver el arreglo con parametros
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li
          onClick={() => console.log(elemento)}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
    //
  );
}

export default List;
