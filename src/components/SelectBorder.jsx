import React from "react";

function SelectBorder({
  data,
  label,
  name,
  id,
  disabled,
  onChange,
  idx,
  value,
  selectedOption,
  isFilter,
  err
}) {
  const handleChange = (e) => {
    onChange(e, idx);
  };

  return (
    <label className="form-control">
      {label ? (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      ) : null}
      <select
        className={`select select-bordered ${err ? "border-red-600" : ""}`}
        name={name}
        id={id}
        value={value}
        disabled={disabled}
        onChange={isFilter ? handleChange : onChange}
      >
        <option disabled value="">
          {selectedOption}
        </option>
        {value &&
          !data.find((ele) => ele.label === value || ele.value === value) && (
            <option value={value}>{value}</option>
          )}
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectBorder;
