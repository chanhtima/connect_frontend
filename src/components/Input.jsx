import React from "react";

function Input({ type, placeholder, disabled, id, name, value, label, err ,onChange}) {
  return (
    <label className="form-control w-full ">
      {label ? (
        <div className="pb-2">
          <span className="label-text">{label}</span>
        </div>
      ) : null}
      <input
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        min={0}
        value={value}
        onChange={onChange}
        className={`input input-bordered w-full ${err ?"border-red-600" :""}`}
      />
    </label>
  );
}

export default Input;
