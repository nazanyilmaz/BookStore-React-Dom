import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    searchParams.set("short", e.target.value);

    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    searchParams.set("search", e.target[0].value);

    setSearchParams(searchParams);
  };

  return (
    <div className="mt-4 gap-3 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <label>Short </label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="type book title"
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default FilterArea;
