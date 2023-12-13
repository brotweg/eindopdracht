import React, {useContext, useState} from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Inloggen.module.css";
import "../index.css";
import Irish_setter from "../assets/Irish_setter.png";
import Header from "../components/Header";

function Inloggen() {
    const [error, setError] = useState('');
    const { isAuth, login } = useContext(AuthContext);
    const { handleSubmit, formState: { errors }, register } = useForm();
    const navigate = useNavigate();

    function handleLoginSubmit(data) {
        async function formSubmit() {
            try {
                const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                    "username": data.username,
                    "password": data.password,
                });
                const accessToken = result.data.accessToken;
                login(accessToken);
                navigate('/uitleg');
            } catch (error) {
                console.error(error);
                if (error.response) {
                    setError("Bad login request, please check your username and password.");
                } else if (error.request) {
                    setError("Login server offline");
                } else {
                    setError("Error setting up the request.")
                }
            }
        }
        formSubmit();
    }

    return (
        <>
            <div className={styles["page_wrapper"]}>
                <div className={styles["inner_wrapper"]}>
                    <h1>Inloggen</h1>
                    <div className={styles['form_paragraph']}>
                        <form onSubmit={handleSubmit(handleLoginSubmit)}>
                            <section>
                                <label htmlFor="username-field">Username:</label>
                                <input
                                    id="username-field"
                                    type="text"
                                    {...register("username", {
                                        required: { value: true, message: 'Please provide a username' },
                                        minLength: { value: 6, message: 'Your username should contain at least six characters.' },
                                    })}
                                />
                            </section>
                            <section>
                                <label htmlFor="password-field">Password:</label>
                                <input
                                    id="password-field"
                                    type="password"
                                    {...register("password", {
                                        required: { value: true, message: 'Please provide a password' },
                                        minLength: { value: 6, message: 'Your password should contain at least six characters.' },
                                    })}
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                                {error && <p>{error}</p>}
                            </section>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className={styles['dog']}>
                    <img alt="Irish Setter" src={Irish_setter} className={styles['dog--setter']} />
                </div>
            </div>
        </>
    );
}

export default Inloggen;