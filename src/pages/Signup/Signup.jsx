import { NavLink } from 'react-router-dom';

import SignupStyle from './Signup.module.css';

const Signup = () => (
  <div className={SignupStyle['signup-wrapper']}>
    <div className={SignupStyle['signup-box']}>
      <h2>Signup</h2>
      <form autoComplete="off">
        <div className={SignupStyle['user-box']}>
          <input type="text" name="" required="" autoComplete="off" />
          <label>Username</label>
        </div>
        <div className={SignupStyle['user-box']}>
          <input
            type="password"
            name=""
            required=""
            autoComplete="new-password"
          />
          <label>Password</label>
        </div>
        <div className={SignupStyle['user-box']}>
          <input
            type="password"
            name=""
            required=""
            autoComplete="new-password"
          />
          <label>Confirm Password</label>
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

export default Signup;
