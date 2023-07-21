import { Routes, Route } from "react-router-dom";

import Home from "../paginas/client/Home";
import ClienteLayout from "../Layout/clientLayout/ClienteLayout";
//import piePagina from "../components/piepagina";
import Logo from "../paginas/client/Home";

function RutasCliente() {
  return (
   
      <ClienteLayout>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Logo/>}/>
        </Routes>
      </ClienteLayout>
   
  );
}
export default RutasCliente;