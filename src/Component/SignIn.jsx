import { useState } from "react";

const SignIn = ({ formData }) => {
    const [result, setResult] = useState("");

    const [state, setState] = useState({
        username: "",
        Password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.Username === state.username && formData.Password === state.Password) {
            setResult("✅ You are logged in!");
            console.log(state, "you are logged in");
        } else {
            setResult("❌ Incorrect username or password.");
        }
    };

    return (
        <>
            <h2>This is SignIn Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={state.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="Password" value={state.Password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit Data</button>
            </form>

            {/* Display result message */}
            <div id="process">{result || "Data not submitted"}</div>
        </>
    );
};

export default SignIn;
