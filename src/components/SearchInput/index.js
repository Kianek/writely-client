import './search-input.scss';

function SearchInput({ value, onChange, onKeyUp }) {
  const setValue = (event) => {
    onChange(event);
    console.log(event);
  };

  return (
    <>
      <label htmlFor="search" hidden />
      <input
        id="search-input"
        type="search"
        name="search"
        placeholder="Search by tags"
        onChange={setValue}
        onKeyUp={onKeyUp}
        value={value}
      />
    </>
  );
}

export default SearchInput;
