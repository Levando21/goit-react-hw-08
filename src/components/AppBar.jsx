/** @format */

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<header>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</header>
	);
};

export default AppBar;
