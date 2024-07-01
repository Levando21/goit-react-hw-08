/** @format */

import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
// import css from './UserMenu.module.css';

const UserMenu = () => {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOut());
	};

	return (
		<div className="flex">
			<p>Welcome, username</p>
			<button onClick={handleLogOut}>Logout</button>
			{/* <button >Logout</button> */}
		</div>
	);
};

export default UserMenu;
