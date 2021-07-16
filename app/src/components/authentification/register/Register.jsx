import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as usersApi from "../../../api/users";
import '../Auth.css';
import {toast} from "react-toastify";

const Register = ({history}) => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  })

  const handleChange = (e) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiErrors = {}

    if (user.password !== user.passwordConfirm) {
      apiErrors.passwordConfirm = "Votre confirmation de mot de passe n'est pas confirme avec le mot de passe original"
      setErrors(apiErrors)
      return;
    }

    try {
      const test = await usersApi.postUser(user)
      console.log(test);
      setErrors({})
      history.replace('/login')
    } catch (error) {
        console.log(error);
        //setErrors(apiErrors)
    }
  }

  return (
      <>
        <div className="form-auth">
          <div className="form">
            <h1 className="website-title">Inscription sur Instatata</h1>

            <div className="separator"></div>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="row">
                <div className="form-group col-sm-6">
                  <input className="form-control" name="username" type="test" label="Identifiant" placeholder="Votre identifiant" error={errors.username} value={user.username} onChange={handleChange}/>
                </div>
                <div className="form-group col-sm-6">
                  <input className="form-control" name="password" type="password" label="Mot de passe" placeholder="Votre mot de passe" error={errors.password} value={user.password} onChange={handleChange}/>
                </div>
                <div className="form-group col-sm-12 mt-2">
                  <input className="form-control" name="passwordConfirm" type="password" label="Confirmation de Mot de passe" placeholder="Confirmez votre mot de passe" error={errors.passwordConfirm} value={user.passwordConfirm} onChange={handleChange}/>
                </div>
              </div>

              <br/>

              <div className="form-group">
                <button type="submit" className="btn-custom">Inscription</button>
              </div>
            </form>
            <Link to="/login" className="btn btn-link">J'ai déjà un compte</Link>
          </div>
        </div>
      </>
  )
}

export default Register
