import { NavLink } from 'react-router-dom';

import loginStyle from './Login.module.css';

const Login = () => (
  <div className={loginStyle['login-wrapper']}>
    <div className={loginStyle['login-box']}>
      <h2>Login</h2>
      <form autoComplete="off">
        <div className={loginStyle['user-box']}>
          <input type="text" name="" required="" autoComplete="off" />
          <label>Username</label>
        </div>
        <div className={loginStyle['user-box']}>
          <input
            type="password"
            name=""
            required=""
            autoComplete="new-password"
          />
          <label>Password</label>
        </div>
        <NavLink to="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </NavLink>
      </form>
    </div>
  </div>
);

export default Login;
