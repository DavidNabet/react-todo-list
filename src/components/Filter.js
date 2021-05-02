import React from "react";

const Filter = ({ searchFilter }) => {
	return (
		<>
			<input
				placeholder="Cherchez une tâche par nom"
				type="text"
				onChange={(e) => searchFilter(e)}
			/>
		</>
	);
};

export default Filter;
