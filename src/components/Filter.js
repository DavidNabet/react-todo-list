import React from "react";

const Filter = ({ searchFilter, theme }) => {
	return (
		<>
			<input
				placeholder="Cherchez une tâche par nom"
				type="text"
				style={{ boxShadow: theme.boxShadow }}
				onChange={(e) => searchFilter(e)}
			/>
		</>
	);
};

export default Filter;
