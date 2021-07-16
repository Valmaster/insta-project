import React, {useState, useContext} from 'react';
import * as usersApi from "../../../api/users";
import AuthContext from "../../../contexts/AuthContext"
import '../Auth.css';
import {toast} from "react-toastify";
import * as usersActions from "../../../redux/store/user/user.actions";
import {connect} from "react-redux";

const Login = ({history, login, user}) => {

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
            await login(credentials);
/*        try {
            const error = await usersApi.authenticate(credentials)
            console.log(error)
            if (error) {
                toast.error('Identifiants incorrects')
            } else {
                setError("")
                setIsAuthenticated(true)
                toast.success('Connexion avec succès !')
                history.replace("/")
            }
        } catch (error) {
            toast.error('Identifiants incorrects')
        }*/
    }

    return (
        <>
            <div className="form-auth">
                <div className="form">
                    <h1 className="website-title">Connexion sur Instatata</h1>

                    <div className="separator"></div>

                    <form onSubmit={handleSubmit} className="mt-5">
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <input className="form-control" label="Identifiant" name="username" value={credentials.username} onChange={handleChange}
                                       placeholder="Identifiant" error={error}/>
                            </div>
                            <div className="form-group col-sm-6">
                                <input className="form-control" label="Mot de passe" name="password" type="password" value={credentials.password} onChange={handleChange}
                                       placeholder="Mot de passe" error={error}/>
                            </div>
                        </div>

                        <br/>

                        <div className="form-group">
                            <button type="submit" className="btn-custom">Connexion</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user_logged,
    }
};

const mapDispatchToProps = dispatch => ({
    login: (credential) => dispatch(usersActions.login(credential)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
