/** @format */

import { selectNameFilter } from "../redux/filters/selectors";
import { changeFilter } from "../redux/filters/slice";

import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectNameFilter);

	const handleSearch = (e) => {
		dispatch(changeFilter(e.target.value));
	};

	return (
		<div className={styles.containerSearchForm}>
			<label htmlFor="search">Find contacts by name</label>
			<input
				id="search"
				name="search"
				type="text"
				autoComplete="search"
				value={searchQuery}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBox;
