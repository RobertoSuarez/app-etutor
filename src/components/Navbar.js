import { Link } from "react-router-dom";
import { React, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import TextField from "@mui/material/TextField";
import { List } from "../components/List";

export default function Navbar() {

  const Links = [
    { title: "Teach", path: "/teacher" },
    { title: <IoMdCart />, path: "/cart" }
  ];

  const [notification, setNotification] = useState(false);

  const showNotification = () => setNotification(!notification);

  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    //convert input text to lower case
    // var lowerCase = e.target.value.toLowerCase();
    setInputText(e.target.value);
  };


  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">E-Tutor</h1>
      </Link>

      <div className={notification ? "notification notification-active" : "notification"}>
        <li>Welcome to e-Learn</li>
        <li>Course starting from ₹299 only</li>
      </div>

      <div className="box-search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          value={inputText}
          color="primary"
          autoComplete={false}
          variant="outlined"
          fullWidth
          className="input-search"
          label="Buscar"
        />

        <div className="container-opciones">
          <List input={inputText}/>
          
        </div>
      </div>
      
      
      {/* <div className="search-box">
          <div className="search">
            <div className="text-r">Hola,</div>
              <TextField
                id="outlined-basic"
                onChange={inputHandler}
                value={inputText}
                autoComplete={false}
                variant="outlined"
                fullWidth
                label="Search"
              />
          </div>
          
          <List input={inputText} id="list-box" />
      </div> */}

      <ul className="nav-link">

        {Links.map((item, index) => {
          return (            
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
        <li>
              <div onClick={showNotification} className="pointer"><MdNotifications /></div>
            </li>
      </ul>
    </div>
  );
}
