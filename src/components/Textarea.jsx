import React from "react";

function Textarea({
  type,
  placeholder,
  disabled,
  id,
  name,
  value,
  label,
  err,
  onChange,
}) {
  return (
    <label className="form-control">
      {label ? (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      ) : null}
      <textarea
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        min={0}
        value={value}
        onChange={onChange}
        className={`textarea textarea-bordered   h-20 ${
          err ? "border-red-600" : ""
        }`}
      />
    </label>
  );
}

export default Textarea;
