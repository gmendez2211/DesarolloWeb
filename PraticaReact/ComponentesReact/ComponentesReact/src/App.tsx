import { Route, Routes } from "react-router-dom";
import "./App.css";
//import Button from "./componentes/Button";
//import Form from "./componentes/Form";
import ConsultaJSON from "./view/ConsultaJSON";
import Menu from "./view/Menu";
import CrearAuthor from "./view/CrearAuthor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/Consulta" element={<ConsultaJSON />} />
      <Route path="/Crea" element={<CrearAuthor />} />
    </Routes>
  );
}
export default App;
