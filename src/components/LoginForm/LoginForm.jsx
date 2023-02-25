import { Component } from 'react';

// import { login } from './utils';

export class LoginForm extends Component {
  render() {
    return (
      <form className="form-signin d-flex align-items-center justify-content-center mt-5">
        <div className="d-block" style={{ width: 300, height: 'max-content' }}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mt-4">
            <input
              id="pass"
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="pass">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
            Sign in
          </button>

          <p className="mt-5 mb-3 text-muted">© 2023</p>
        </div>
      </form>
    );
  }
}
