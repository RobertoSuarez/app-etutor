import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const { name, email, password } = req.body;

  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState('');

  const IsLogged = localStorage.getItem('IsLogged');
  console.log(IsLogged);
  // eslint-disable-next-line no-unused-vars
  function CheckUser() {
    if (IsLogged == 'true') {
      navigate('/teacher/');
    }
  }

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json().then((data) => {
      setUserData(data);
    });

    if (res.status === 404 || !data) {
      window.alert('Credenciales no válidas');
    } else {
      setIsSignup(true);
      localStorage.setItem('userId', userData.user._id);
      localStorage.setItem('IsLogged', true);

      window.alert('Inicio de sesión exitoso');

      // navigate("/teacher/");
      window.location.href = '/teacher';
    }

    // console.log(userData);
  };

  return (
    <>
      <section className="create-course">
        <form method="POST" className="course-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresar contraseña"
            />
          </div>

          <div>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Login"
              onClick={LoginUser}
              className="btn"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
