import './Register.css';
import React from 'react';

class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange(event) {
    event.preventDefault()
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
     <div className="container mt-5">
      <form className="row">
        <div className="form-group col-md-4">
          <label for="prenom">Prénom</label>
          <input type="text" className="form-control" id="prenom" placeholder="prénom" name="firstname" value={this.state.firstname} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group col-md-4">
          <label for="nom">Nom</label>
          <input type="text" className="form-control" id="nom" placeholder="nom" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group col-md-4">
          <label for="email">Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={this.state.email} placeholder="Email" onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="form-group col-md-4">
          <label for="password">Mot de passe</label>
          <input type="password" className="form-control" id="password" placeholder="Mot de passe" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
        </div>
        <div className="col-md-8"></div>
        <div className="form-group col-md-4 mt-3">
          <button className="btn btn-success" onClick={(event) => this.createUser(event)}>S'inscrire</button>
        </div>
      </form>
      </div>
    )
  }
}

export default Register;
