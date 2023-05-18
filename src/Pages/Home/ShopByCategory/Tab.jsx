import React from "react";

function Tab(props) {
  const { label, children } = props;

  return (
    <div className="tab">
      <h2>{label}</h2>
      {children}
    </div>
  );
}

export default Tab;
