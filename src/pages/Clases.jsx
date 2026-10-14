
import TarjetaClase from "../components/TarjetaClase";

function Clases() {


  const clases = [
  {
    id: 1,
    titulo: "Bases de Datos",
    descripcion: "F la mte la sa la mete la sca",
    imagen:
      "https://images.unsplash.com/photo-1791395275920-5e3b2e738557?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D",
  },
  {
    id: 2,
    titulo: "Programación Web",
    descripcion: "laudaro si lroem",
    imagen:
      "https://images.unsplash.com/photo-1790805502418-81e02c0083e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    titulo: "Programacion web",
    descripcion: "laudatro si",
    imagen:
      "https://images.unsplash.com/photo-1790805502418-81e02c0083e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

  
  return (
    <section>
      <h2 className="seccion__titulo">Módulos disponibles</h2>

      <div className="tarjetas">
        {clases.map((clase) => (
          <TarjetaClase key={clase.id} clase={clase} />
        ))}
      </div>
    </section>
  );
}

export default Clases;
