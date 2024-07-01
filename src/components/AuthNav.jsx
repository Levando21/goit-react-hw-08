/** @format */

import { Link } from "react-router-dom";

const AuthNav = () => {
	return (
		<div className="flex">
			<Link to="/login">Log In</Link>
			<Link to="/register">Register</Link>
		</div>
	);
};

export default AuthNav;
