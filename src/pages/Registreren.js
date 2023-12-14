import React, {useContext, useState} from "react";
import axios from 'axios';
import Corgi from "../assets/Corgi.png";
import styles from "./Registreren.module.css";
import '../index.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
    const { toggleIsAuth } = useContext(AuthContext);
    const { handleSubmit, formState: { errors }, register } = useForm();
    const navigate = useNavigate();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    function handleRegisterSubmit(data) {
        async function formSubmit() {
            try {
                await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                    "username": data.username,
                    "email": data.email,
                    "password": data.password,
                    "role": ["user"]
                });
                setRegistrationSuccess(true);

            } catch (e) {
                console.error(e);
                toggleIsAuth(false);
            }
        }
        formSubmit();
    }

    return (
        <>
            <div className={styles["page_wrapper"]}>
                <div className={styles["inner_wrapper"]}>
                    <h1>Create Account</h1>
                    <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                        <section>
                            <label htmlFor="username-field">Userame</label>
                            <input
                                id="username-field"
                                type="text"
                                {...register("username", {
                                    required: { value: true, message: 'Please provide a username.' },
                                    minLength: { value: 6, message: 'Your username should contain at least six characters.' },
                                })}
                            />
                            {errors.username && <p>{errors.username.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="email-field">Email</label>
                            <input
                                id="email-field"
                                type="email"
                                {...register("email", {
                                    required: { value: true, message: 'Please provide an email-address.' },
                                    minLength: { value: 10, message: 'Your email-address should contain at least ten characters.' },
                                    validate: (value) => value.includes('@') || 'Your email-address should contain @',
                                })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </section>
                        <section>
                            <label htmlFor="password-field">Password</label>
                            <input
                                id="password-field"
                                type="password"
                                {...register("password", {
                                    required: { value: true, message: 'Please provide a password.' },
                                    minLength: { value: 6, message: 'Your password should contain at least six characters.' },
                                })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </section>
                        {!registrationSuccess && (
                            <button type="submit">Submit</button>
                        )}
                        {registrationSuccess && (
                            <div className={styles["success_popup"]}>
                                <p>Registration successful! You can now log in.</p>
                                <button onClick={() => navigate('/inloggen')}>Okay</button>
                            </div>
                        )}
                    </form>
                </div>
                <div className={styles['dog']}>
                    <img alt="Corgi" src={Corgi} className={styles['dog--corgi']} />
                </div>
            </div>
        </>
    );
}

export default Register;






