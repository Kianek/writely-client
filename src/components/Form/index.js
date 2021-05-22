import PropTypes from 'prop-types';
import './form.scss';

function Form({ children, onSubmit }) {
  const submitForm = (func) => (e) => {
    e.preventDefault();
    func();
  };

  return <form onSubmit={submitForm(onSubmit)}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Form;
