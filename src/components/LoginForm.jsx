/** @format */
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../redux/auth/operations";
import { Formik, Field, ErrorMessage, Form } from "formik";

const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(6, "Must be at least 6 characters")
		.required("Required"),
});

const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, { resetForm }) => {
		dispatch(logIn(values))
			.unwrap()
			.then(() => {
				console.log("login success");
			})
			.catch((error) => {
				console.log("login error", error);
			});
		resetForm();
	};

	return (
		<div>
			<h2>Login,please!!</h2>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<Form autoComplete="off">
					<div>
						<label htmlFor="email">Email</label>
						<Field
							type="email"
							name="email"
							id="email"
						/>
						<ErrorMessage
							name="email"
							component="div"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Field
							type="password"
							name="password"
							id="password"
						/>
						<ErrorMessage
							name="password"
							component="div"
						/>
					</div>
					<button type="submit">Login</button>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginForm;
