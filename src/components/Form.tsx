import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import FormStatus from "./FormStatus";

const Form = () => {
	const REGEX = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		checked: false,
	});

	const [errorsMessage, setErrorsMessage] = useState({
		name: "",
		email: "",
		message: "",
		checked: "",
	});

	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setSuccess(false);
			setStatus(false);
		}, 6000);

		return () => clearInterval(timer);
	}, [success, status]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setFailed(false);
			setStatus(false);
		}, 6000);

		return () => clearInterval(timer);
	}, [failed, status]);

	const updateForm = (key: string, value: string | boolean) => {
		cleanErrorsMessage();

		setForm(form => ({
			...form,
			[key]: value,
		}));
		console.log(form.checked);
	};

	const updateErrorsMessage = (key: string, value: string) => {
		setErrorsMessage(errors => ({
			...errors,
			[key]: value,
		}));
	};

	const validationForm = () => {
		if (!form.email.match(REGEX)) {
			form.email === ""
				? updateErrorsMessage("email", "Podaj e-mail")
				: updateErrorsMessage("email", "Nieprawidłowy e-mail");
		}
		if (form.name.length < 3 || form.name.length > 99) {
			form.name === ""
				? updateErrorsMessage("name", "Podaj imię i nazwisko")
				: updateErrorsMessage("name", "Imię jest za krótkie");
		}

		if (form.message.length < 10) {
			form.message === ""
				? updateErrorsMessage("message", "Napisz wiadomość")
				: updateErrorsMessage("message", "Wiadomość jest za krótka");
		}

		if (!form.checked) {
			updateErrorsMessage("checked", "Należy wyrazić zgodę");
		}
	};

	const sendForm = async (e: FormEvent) => {
		e.preventDefault();

		if (
			errorsMessage.email ||
			errorsMessage.name ||
			errorsMessage.message ||
			errorsMessage.checked
		) {
			console.log("jesteśmy w błędzie");
			return;
		}

		setLoading(true);

		try {
			const response = await axios.post(
				// "https://gajewwwski.net/contact/contact.php",
				"http://localhost/contact/contact.php",

				{
					email: form.email,
					name: form.name,
					message: form.message,
				}
			);
			console.log(response);

			if (response.status !== 200) {
				console.log(response);
				console.error("Nie można wysłać wiadomosći");
			} else {
				setSuccess(true);
				clearForm();
			}
		} catch (e) {
			setFailed(true);
			console.error("Nie można wysłać wiadomosći");
		} finally {
			setLoading(false);
			setStatus(true);
		}
	};

	const clearForm = () => {
		setForm({
			name: "",
			email: "",
			message: "",
			checked: false,
		});
	};

	const cleanErrorsMessage = () => {
		setErrorsMessage({
			email: "",
			name: "",
			message: "",
			checked: "",
		});
	};

	return (
		<>
			{loading && <Loading />}
			<form onSubmit={sendForm} className="form">
				<label className="form__label">
					<input
						type="text"
						value={form.name}
						id={form.name}
						onChange={e => updateForm("name", e.target.value)}
						placeholder="Imię i nazwisko*"
						className="form__input"
					/>
					<p className="form__error__text">{errorsMessage.name}</p>
				</label>
				<label className="form__label">
					<input
						type="email"
						value={form.email}
						id={form.email}
						onChange={e => updateForm("email", e.target.value)}
						placeholder="Adres e-mail*"
						className="form__input"
					/>
					<p className="form__error__text">{errorsMessage.email}</p>
				</label>
				<label className="form__label">
					<textarea
						value={form.message}
						id={form.message}
						onChange={e => updateForm("message", e.target.value)}
						placeholder="Wiadomość*"
						className="form__input message-box"
					/>
					<p className="form__error__text">{errorsMessage.message}</p>
				</label>
				<label className="form__label form__label__checkbox">
					<input
						type="checkbox"
						className="form__checkbox"
						checked={form.checked}
						id="accept"
						name="accept"
						onChange={e => {
							updateForm("checked", e.currentTarget.checked);
						}}
					/>
					<p className="form__checkbox__text">
						Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w
						powyższym formularzu kontaktowym przez{" "}
						<strong>gajewwwski.net</strong>, w celu udzielenia odpowiedzi na
						moje zapytanie. Podanie danych jest dobrowolne, ale niezbędne do
						realizacji tego celu. Przysługuje mi prawo dostępu do treści swoich
						danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz
						wniesienia sprzeciwu wobec ich przetwarzania. Więcej informacji na
						temat przetwarzania danych znajdziesz w naszej{" "}
						<Link to="/polityka-prywatnosci">Polityce Prywatności.</Link>
					</p>
					<p className="form__error__text">{errorsMessage.checked}</p>
				</label>
				<button
					className="form__btn btn"
					type="submit"
					onClick={validationForm}
				>
					Wyślij
				</button>
			</form>

			{status && <FormStatus failed={failed} success={success} />}
		</>
	);
};

export default Form;
