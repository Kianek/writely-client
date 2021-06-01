import PropTypes from 'prop-types';

function Padding({ amount }) {
  return (
    <div
      data-testid="padding"
      style={{ padding: amount ? amount : '1em' }}
    ></div>
  );
}

Padding.propTypes = {
  amount: PropTypes.string,
};

export default Padding;
