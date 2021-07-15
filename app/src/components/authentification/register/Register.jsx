import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as usersApi from "../../../api/users";

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
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
          <input name="username" type="test" label="Identifiant" placeholder="Votre identifiant" error={errors.username} value={user.username} onChange={handleChange}/>
          <input name="password" type="password" label="Mot de passe" placeholder="Votre mot de passe" error={errors.password} value={user.password} onChange={handleChange}/>
          <input name="passwordConfirm" type="password" label="Confirmation de Mot de passe" placeholder="Confirmez votre mot de passe" error={errors.passwordConfirm} value={user.passwordConfirm} onChange={handleChange}/>

          <div className="form-group">
            <button type="submit" className="btn btn-success">Confirmation</button>
            <Link to="/login" className="btn btn-link">J'ai déjà un compte</Link>
          </div>
        </form>
      </>
  )
}

export default Register
