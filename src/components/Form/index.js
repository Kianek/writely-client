import PropTypes from 'prop-types';
import './form.scss';

function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Form;
