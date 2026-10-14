import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Clases from "./pages/Clases";
import Docentes from "./pages/Docentes";

function App() 
{

  
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="clases" element={<Clases />} />
          <Route path="docentes" element={<Docentes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
