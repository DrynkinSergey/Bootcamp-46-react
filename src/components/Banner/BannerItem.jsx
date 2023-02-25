import { PropTypes } from 'prop-types';

export const BannerItem = ({ children }) => {
  return (
    <div className="feature col">
      <div
        className="d-flex rounded justify-content-center align-items-center mb-4 text-white bg-primary bg-gradient"
        style={{ width: '70px', height: '70px', fontSize: '30px' }}
      >
        {children}
      </div>

      <div className="my-5 me-5">
        <h2>title</h2>
        <p>text</p>
      </div>

      <button type="button" className="btn btn-primary">
        Call to action
      </button>
    </div>
  );
};

BannerItem.propTypes = {
  children: PropTypes.node.isRequired,
};
