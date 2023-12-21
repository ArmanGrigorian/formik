import "./Registration.scss";
import { T_user } from "../../types";

import { validationSchema } from "../../schemas/users";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { addUser, selectAll } from "../../redux/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Registration = () => {
	const dispatch = useAppDispatch();
	const allUsers = useAppSelector(selectAll);

	const initialValues: T_user = {
		firstName: "",
		lastName: "",
		birthday: "",
		avatar: "",
		gender: "",
		color: "#ffffff",
		season: "",
		continent: [],
		ocean: "",
		number: 0,
		vocation: "",
		languages: [],
		login: "",
		email: "",
		password: "",
		repeatPassword: "",
	};

	function handleSubmit(values: T_user, { resetForm }: { resetForm: () => void }) {
		const newUser: T_user = {
			id: crypto.randomUUID(),
			...values,
		};

		if (!allUsers.some((user) => user.email === newUser.email)) {
			dispatch(addUser(newUser));
			resetForm();
		}
	}

	console.log(allUsers);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			validateOnChange={false}
			validateOnBlur={true}
			onSubmit={handleSubmit}>
			{() => {
				return (
					<Form>
						<div>
							<fieldset>
								<legend>Personal info</legend>
								<div>
									<label htmlFor="firstName">📄first name</label>
									<Field
										type="text"
										id="firstName"
										name="firstName"
										placeholder=" enter your name..."
									/>
									<ErrorMessage name="firstName">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="lastName">📄last name</label>
									<Field
										type="text"
										id="lastName"
										name="lastName"
										placeholder=" enter your surname..."
									/>
									<ErrorMessage name="lastName">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="birthday">🎂birthday</label>
									<Field type="date" id="birthday" name="birthday" value="2024-12-31" />
									<ErrorMessage name="birthday">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="avatar">🧛🏻avatar</label>
									<Field type="file" id="avatar" name="avatar" />
									<ErrorMessage name="avatar">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>
							</fieldset>

							<fieldset>
								<legend>Gender</legend>
								<div>
									<label htmlFor="male">🚹male</label>
									<Field type="radio" id="male" name="gender" value="male" />
								</div>

								<div>
									<label htmlFor="female">🚺female</label>
									<Field type="radio" id="female" name="gender" value="female" />
								</div>
								<ErrorMessage name="gender">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
							</fieldset>

							<fieldset>
								<legend>Your favorites</legend>
								<div>
									<label htmlFor="color">🌈color</label>
									<Field type="color" id="color" name="color" value="#ffffff" />
								</div>

								<div>
									<label htmlFor="season">🌄season</label>
									<Field as="select" id="season" name="season">
										<option value="spring">🌿Spring</option>
										<option value="summer">☀️Summer</option>
										<option value="autumn">🍂Autumn</option>
										<option value="winter">❄️Winter</option>
									</Field>
									<ErrorMessage name="season">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="vocation">🛳️vocation</label>
									<Field type="month" id="vocation" name="vocation" />
								</div>

								<div>
									<label htmlFor="num">🔢number</label>
									<Field type="number" id="num" name="number" />
								</div>
							</fieldset>

							<fieldset>
								<legend>Places to visit</legend>
								<div>
									<label htmlFor="continent">🌏continent</label>
									<Field as="select" multiple id="continent" name="continent">
										<option value="africa">Africa</option>
										<option value="asia">Asia</option>
										<option value="europe">Europe</option>
										<option value="northAmerica">North America</option>
										<option value="southAmerica">South America</option>
										<option value="antarctica">Antarctica</option>
										<option value="australia">Australia</option>
									</Field>
								</div>

								<div>
									<label htmlFor="ocean">🌏ocean</label>
									<Field list="ocean" name="ocean" />
									<datalist id="ocean">
										<option value="atlantic"></option>
										<option value="pacific"></option>
										<option value="indian"></option>
										<option value="southern"></option>
									</datalist>
								</div>
							</fieldset>

							<fieldset>
								<legend>Languages</legend>
								<div>
									<label htmlFor="arm">🔊armenian</label>
									<Field type="checkbox" id="arm" name="languages" value="hy" />
								</div>

								<div>
									<label htmlFor="rus">🔊russian</label>
									<Field type="checkbox" id="rus" name="languages" value="ru" />
								</div>

								<div>
									<label htmlFor="eng">🔊english</label>
									<Field type="checkbox" id="eng" name="languages" value="en" />
								</div>
							</fieldset>

							<fieldset>
								<legend>Log info</legend>

								<div>
									<label htmlFor="login">🤚🏻login</label>
									<Field type="text" id="login" name="login" placeholder=" enter your login..." />
									<ErrorMessage name="login">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="email">📧email</label>
									<Field type="email" id="email" name="email" placeholder=" enter your email..." />
									<ErrorMessage name="email">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="password">🔑password</label>
									<Field
										type="password"
										id="password"
										name="password"
										placeholder=" enter your password..."
									/>
									<ErrorMessage name="password">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>

								<div>
									<label htmlFor="rpt">🔑repeat</label>
									<Field
										type="password"
										id="rpt"
										name="repeatPassword"
										placeholder=" repeat password..."
									/>
									<ErrorMessage name="repeatPassword">{(msg) => <p>❗{msg}</p>}</ErrorMessage>
								</div>
							</fieldset>
						</div>

						<div>
							<Field type="reset" id="reset" value="Clear" />
							<Field type="submit" id="submit" value="Submit" />
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Registration;
