/** @format */

import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../redux/auth/operations";

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(6, "Must be at least 6 characters")
		.required("Required"),
});

const RegistrationForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, { resetForm }) => {
		console.log("Submitting values:", values);
		dispatch(register(values))
			.unwrap()
			.then(() => {
				console.log("Registration successful! Welcome!");
			})
			.catch((error) => {
				console.error("Registration error. Please try again.", error);
			});
		resetForm();
	};

	return (
		<div>
			<h2>Register,please!</h2>
			<Formik
				initialValues={{ name: "", email: "", password: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<Form autoComplete="off">
					<div>
						<label htmlFor="name">Name</label>
						<Field
							type="text"
							name="name"
							id="name"
						/>
						<ErrorMessage
							name="name"
							component="div"
						/>
					</div>
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
					<button type="submit">Register</button>
				</Form>
			</Formik>
		</div>
	);
};

export default RegistrationForm;
