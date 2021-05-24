import classNames from 'classnames';
import PropTypes from 'prop-types';
import './form.scss';

function Form({ children, fluid, onSubmit }) {
  const submitForm = (func) => (e) => {
    e.preventDefault();
    func();
  };

  return (
    <form className={classNames({ fluid })} onSubmit={submitForm(onSubmit)}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Form;
