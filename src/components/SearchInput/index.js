import './search-input.scss';

function SearchInput({ value, onChange }) {
  const setValue = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      id="search-input"
      type="search"
      name="search"
      placeholder="Search by tags"
      onChange={setValue}
      value={value}
    />
  );
}

export default SearchInput;
