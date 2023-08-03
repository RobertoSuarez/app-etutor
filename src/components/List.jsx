import { React } from "react";
import "./styles/List.css"
import useCourses from "../hooks/useCourses";
import { useSearchPage } from "../hooks/useSearchPage";

/*
  Ideas que me gustarian que esten en la lista de opciones

  - Las 3 ultimas busquedas que ha hecho el usuario, estos 
    resultados deben estar en función alo que escriba el usuario.
  - Los 3 primeros curso que se asimile a lo que ha escrito el usuario.
  - Se pueden buscar paginas u opciones de la aplicación
*/

export const List = ({ input }) => {
  

  const { isLoading, error} = useCourses(input)
  const { pages } = useSearchPage(input)

  // if (isLoading) {
  if (false) {
    return (
      <div className="box-cargando">
        <h2 className="texto-base">Cargando datos... 🧠</h2>
      </div>
    );
  }

  // if (error) {
  if (false) {
    return (
      <div className="list-error">
        <div className="texto-base">No podemos conectar con el servicio en este momento. Vuelva a intentarlo más tarde o actualice 📶</div>
      </div>
    )
  }

  return (
    <div className="box-resultados">  
      <h5>Páginas</h5>
      { pages && pages.map(p => <div key={p}>{p}</div>)}
  
    </div>
  )


  // if (DataisLoaded) {
  //   filteredData = course.items.courses.filter((el) => {
  //     if (input === "") {
  //       return el;
  //     } else {
  //       return el.title.toLowerCase().includes(input);
  //     }
  //   });
  // }    

  // return (
  //   <ul className="searched-data">
  //     {filteredData.map((item) => (
  //       <Link to={"/learning/" + item._id} key={item._id}>
  //         <li className="no-list">{item.title}</li>
  //       </Link>
  //     ))}
  //   </ul>
  // );
}
