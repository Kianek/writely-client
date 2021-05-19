import PropTypes from 'prop-types';
import './form.scss';

function Form({ children }) {
  return <form>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Form;
