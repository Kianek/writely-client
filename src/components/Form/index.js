import classNames from 'classnames';
import PropTypes from 'prop-types';
import Column from '../Column';
import './form.scss';

function Form({ children, fluid, onSubmit }) {
  const submitForm = (func) => (e) => {
    e.preventDefault();
    func();
  };

  return (
    <form className={classNames({ fluid })} onSubmit={submitForm(onSubmit)}>
      <Column>{children}</Column>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Form;
