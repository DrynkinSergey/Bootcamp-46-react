import { PropTypes } from 'prop-types';

// import { ConfettiContainer } from '../Confetti';
export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">

      <main className="tab-content p-5 h-100" style={{ minHeight: '100vh', width: 'calc(100% - 300px)' }}>
        <div className="tab-pane fade show active">{children}</div>
      </main>
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
