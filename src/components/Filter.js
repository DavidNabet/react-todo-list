import React from "react";

const Filter = ({ searchFilter, theme, searchInput }) => {
  return (
    <>
      <input
        placeholder="Cherchez une tâche par nom"
        type="text"
        value={searchInput}
        style={{ boxShadow: theme.boxShadow }}
        onChange={(e) => searchFilter(e)}
      />
    </>
  );
};

export default Filter;
