import React from "react";
import propTypes from "prop-types";
function PropsValidate({ name, age }) {
  return (
    <div>
      <p>{age}</p>
    </div>
  );
}
PropsValidate.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number,
};

export default PropsValidate;
