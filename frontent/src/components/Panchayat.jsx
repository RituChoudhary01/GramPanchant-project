import React from "react";

const Panchayat = ({ data }) => {
  return (
    <section id="panchayat" style={{ padding: "3rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{data.name}</h2>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", maxWidth: "700px", margin: "auto" }}>{data.about}</p>
    </section>
  );
};

export default Panchayat;

