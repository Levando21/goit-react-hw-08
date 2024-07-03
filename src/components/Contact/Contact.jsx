/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteContact(contact.id));
	};
	return (
		<div>
			<li>
				<div>
					<p>
						<FontAwesomeIcon icon={faUser} />
						<span>{contact.name}</span>
					</p>
					<p>
						<FontAwesomeIcon icon={faPhone} />
						{contact.number}
					</p>
				</div>
				<button onClick={handleDelete}>Delete</button>
			</li>
		</div>
	);
};

export default Contact;
