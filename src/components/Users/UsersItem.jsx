// import { PropTypes } from 'prop-types';

export const UsersItem = () => {

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title d-flex">
          Name
          <p className="badge bg-success ms-3">Open to work</p>
        </h5>

        <h6 className="card-subtitle mb-2 text-muted">email</h6>
        <p className="card-text">bio</p>

        <div className="d-flex mb-2">

          <span className="badge bg-dark me-1">
            React
          </span>
        </div>

        <div className="d-flex">
          <button
            type="button"
            className="card-link btn-link"

          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
