import React from "react";

function PropsImmutable({ name }) {
  name.a = "pritu";
  return (
    <>
      <h1>{name.a}</h1>
      <h2>{age}</h2>
    </>
  );
}
export default PropsImmutable;
