import '../components/styles/Card.css';
import { Link } from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../config';

// class Course extends React.Component {
//   // Constructor
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       DataisLoaded: false,
//     };
//   }

//   // ComponentDidMount is used to
//   // execute the code
//   componentDidMount() {
//     fetch("http://localhost:5000/api/course/user/62aa0246021c9967041f94c9")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           items: json,
//           DataisLoaded: true,
//         });
//       });
//   }

//   render() {
//     const { DataisLoaded, items } = this.state;
//     if (!DataisLoaded)
//       return (
//         <div className="loader">
//           <div className="lds-ring">
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//           </div>
//         </div>
//       );

//     return (
//       <div className="page">
//         <br />
//         <h1 className="flex"> All Courses Created by You </h1>{" "}
//         <div className="course-grid-4">
//           {items.courses.courses.map((item) => (
//             <div className="card" key={item._id}>
//               <img src={item.image} alt={item.title} className="card-img" />
//               <div className="card-content">
//                 <div className="card-row">
//                   <div className="course-title">
//                     {item.title.slice(0, 20) + "  ..."}
//                   </div>
//                   <div className="edit">
//                     <Link to={`/teacher/courses/update/${item._id}`}>
//                       <RiEdit2Fill /> Edit
//                     </Link>
//                   </div>
//                 </div>
//                 {/* <div className="card-row">
//                   <div className="course-description">
//                       {item.description}
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

const teacherId = localStorage.getItem('userId');
// console.log(teacherId);

function Courses() {
  const [course, setCourse] = useState({
    items: [],
    DataisLoaded: false,
  });
  // const [teacher, setTeacher] = useState({
  //   items: [],
  //   DataisLoadedT: false,
  // });
  // const { id } = useParams();

  useEffect(() => {
    const url = `${BASE_URL}/api/course/user/${teacherId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCourse({
          items: json,
          DataisLoaded: true,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const DataisLoaded = course.DataisLoaded;

  if (!DataisLoaded)
    return (
      <div className="loader">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  return (
    <div className="page">
      <br />
      <h1 className="flex"> Todos los cursos creados por usted </h1>{' '}
      <div className="course-grid-4">
        {course.items.courses.courses.map((item) => (
          <div className="card" key={item._id}>
            <img src={item.image} alt={item.title} className="card-img" />
            <div className="card-content">
              <div className="card-row">
                <div className="course-title">
                  {item.title.slice(0, 20) + '  ...'}
                </div>
                <div className="edit">
                  <Link to={`/teacher/courses/update/${item._id}`}>
                    <RiEdit2Fill /> Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
