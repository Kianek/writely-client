import classNames from 'classnames';
import './character-counter.scss';

function CharacterCounter({ max, text }) {
  return (
    <p
      data-testid="counter"
      id="char-counter"
      className={classNames({ error: text?.length > max })}
    >
      {text?.length} / {max} {text?.length > max ? 'Too many characters' : ''}
    </p>
  );
}

export default CharacterCounter;
