import React, {useState, useContext} from 'react';
import * as usersApi from "../../../api/users";
import AuthContext from "../../../contexts/AuthContext"

const Login = ({history}) => {

    const {setIsAuthenticated} = useContext(AuthContext)

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;

        // [] pour modif username dans l'objet credentials sinon ça add une nouvelle ligne
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await usersApi.authenticate(credentials)
            setError("")
            setIsAuthenticated(true)
            history.replace("/")
        } catch (error) {
            setError("Aucun compte ne possède cet identifiant")
        }
    }

    return (
        <>
            <h1>Connexion à l'application</h1>

            <form onSubmit={handleSubmit}>
                <input label="Identifiant" name="username" value={credentials.username} onChange={handleChange}
                       placeholder="Identifiant" error={error}/>
                <input label="Mot de passe" name="password" type="password" value={credentials.password} onChange={handleChange}
                       placeholder="Mot de passe" error={error}/>

                <div className="form-group">
                    <button type="submit" className="btn btn-success">Connexion</button>
                </div>
            </form>
        </>
    )
}

export default Login
