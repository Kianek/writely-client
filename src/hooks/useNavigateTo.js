import { useHistory } from 'react-router';

function useNavigateTo(link, opts = { replace: false }) {
  const history = useHistory();

  if (opts.replace) {
    return () => {
      history.replace(link);
    };
  }

  return () => {
    history.push(link);
  };
}

export default useNavigateTo;
