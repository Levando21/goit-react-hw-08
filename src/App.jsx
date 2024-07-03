/** @format */
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import { Toaster } from "react-hot-toast";
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));

const App = () => {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectIsRefreshing);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<b>Refreshing user...</b>
	) : (
		<Layout>
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/register"
					element={
						<RestrictedRoute
							redirectTo="/contacts"
							component={<RegistrationPage />}
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<RestrictedRoute
							redirectTo="/contacts"
							component={<LoginPage />}
						/>
					}
				/>
				<Route
					path="/contacts"
					element={
						<PrivateRoute
							redirectTo="/login"
							component={<ContactsPage />}
						/>
					}
				/>
			</Routes>
		</Layout>
	);
};

export default App;
