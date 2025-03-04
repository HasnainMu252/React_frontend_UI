import { useContext, useState } from "react";
import { ContextAuth } from './ContextAPi/UserAuth';
import SignIn from "./SignIn";

const Signup = () => {
    const { Auth, userData, logUp, setUserData } = useContext(ContextAuth);

    const [form, setForm] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the userData in context with form data
        setForm({
            fname: form.FirstName,
            lname: form.LastName,
            username: form.Username,
            email: form.Email,
            password: form.Password,
        });

        // Optionally log the user in or perform other actions
        logUp();
        console.log('User data after signup:', form);
    };

    return (
        <>
            <h2>This is signup Form</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="FirstName"
                        value={form.FirstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="LastName"
                        value={form.LastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Username:
                    <input
                        type="text"
                        name="Username"
                        value={form.Username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="Email"
                        value={form.Email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="Password"
                        value={form.Password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit Data</button>
            </form>
            <SignIn formData={form}/>

            <ul>
    {Object.entries(form).map(([key, value]) => (
        <li key={key}>
            {key}: {value}
        </li>
    ))}
</ul>

        </>
    );
};

export default Signup;
