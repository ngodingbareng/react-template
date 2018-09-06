import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  readonly,
  disabled,
  error
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={classnames("", {
          "label-invalid": error
        })}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={classnames("form-control", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        { ...disabled ? disabled={disabled} : null }
        { ...readonly ? readonly={readonly} : null }
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
