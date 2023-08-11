import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // const { name, email, password } = req.body;

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    const res = await fetch('http://localhost:5000/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert('Registro fallido');
    } else {
      window.alert('Registro exitoso');
      navigate('/teacher/login');
    }
  };

  return (
    <>
      <section className="create-course">
        <form method="POST" className="course-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder="Ingresar nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Ingresar correo electrónico"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Ingresar contraseña"
            />
          </div>

          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Signup"
              onClick={PostData}
              className="btn"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
