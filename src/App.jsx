/** @format */
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import { Suspense, lazy } from "react";
import AuthNav from "./components/AuthNav";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));

const App = () => {
	return (
		<div>
			<AppBar />
			<Suspense fallback={null}>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/auth"
						element={<AuthNav />}>
						<Route
							path="login"
							element={<LoginPage />}
						/>
						<Route
							path="register"
							element={<RegistrationPage />}
						/>
					</Route>
					<Route
						path="/contacts"
						element={<ContactsPage />}
					/>
					<Route
						path="*"
						element={<div>404</div>}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
