//import Card from "./components/Card";
import Card3 from "./components/Card3";
import "./App.css";
import List from "./components/List";

function App() {
  //Arreglo para trasladar a la lista
  const lList = ["Monitor", "Teclado", "Mouuse"];

  //return <Card />;
  // return <Card2 body={"Hola mundo"} />;
  return (
    <Card3>
      Hola Mundo
      <List data={lList} />
    </Card3>
  );
}

export default App;
