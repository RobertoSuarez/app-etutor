import React, { useEffect, useState } from 'react';
import '../components/styles/Card.css';
import { FcClock } from 'react-icons/fc';
import { BsBarChartFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import imagePlaceholder from '../placeholder-image.jpg';
import useCourses from '../hooks/useCourses';
import { Button } from '@mui/material';

export default function Courses() {
  const { courses, isLoading, error } = useCourses();

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  if (isLoading)
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
      <h1 className="flex"> All Courses </h1>

      <div className="course-grid">
        {courses &&
          courses.courses.map((item) => (
            <div className="card" key={item._id}>
              <img
                src={item.image || imagePlaceholder}
                alt={item.title}
                className="card-img"
              />
              <div className="card-content">
                <div className="card-row">
                  <div className="course-title">
                    {item.title.slice(0, 25) + '  ...'}
                  </div>
                </div>
                <div className="card-row">
                  <div className="discription">
                    {item.description.slice(0, 70) + '  ...'}
                  </div>
                </div>
                <div className="card-row"></div>
                <div className="card-row">
                  <div className="level">
                    <BsBarChartFill />
                    <span>{item.level}</span>
                  </div>
                  <div className="time">
                    <FcClock />
                    {item.time} Hours
                  </div>
                </div>
                <div className="card-row">
                  <div className="price">
                    <BiRupee />
                    {item.price}
                  </div>
                  <div className="rating">
                    <Link to={`/learning/${item._id}`}>
                      View <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <Button variant="contained">Hola, mundo</Button>
    </div>
  );
}
