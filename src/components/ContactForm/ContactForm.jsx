/** @format */
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);

	const formik = useFormik({
		initialValues: {
			name: "",
			number: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(3, "Must be at least 3 characters")
				.max(50, "Must be 50 characters or less")
				.required("Required"),
			number: Yup.string()
				.matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format 123-45-67")
				.required("Required"),
		}),
		onSubmit: (values, { resetForm }) => {
			const newContact = {
				name: values.name,
				number: values.number,
			};
			if (
				contacts.some(
					(contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
				)
			) {
				toast.error(`${newContact.name} is already in contacts.`, {
					position: "top-center",
					duration: 5000,
					style: {
						background: "#F44336",
						color: "#FFFFFF",
					},
				});
				return;
			}
			dispatch(addContact(newContact));
			toast.success(`Added ${newContact.name} to contacts.`, {
				position: "top-center",
				duration: 5000,
				style: {
					background: "#4CAF50",
					color: "#FFFFFF",
				},
			});
			resetForm();
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					autoComplete="name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>
			</div>
			{formik.touched.name && formik.errors.name ? (
				<div>{formik.errors.name}</div>
			) : null}
			<div>
				<label htmlFor="number">Number</label>
				<input
					id="number"
					name="number"
					type="text"
					autoComplete="number"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.number}
				/>
			</div>
			{formik.touched.number && formik.errors.number ? (
				<div>{formik.errors.number}</div>
			) : null}

			<button type="submit">Add Contact</button>
		</form>
	);
};

export default ContactForm;
