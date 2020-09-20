import { useState } from 'react';

function useField() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  return [value, setValue, error, setError];
}

export default useField;
