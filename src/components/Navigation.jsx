/** @format */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<nav>
			<ul className="flex">
				<li>
					<Link to="/">Home</Link>
				</li>
				{isLoggedIn && (
					<li>
						<Link to="/contacts">Contacts</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};
export default Navigation;
