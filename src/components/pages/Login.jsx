import React from 'react'

const Login = () => (
    <div className="colums">
        <div className="column is-4">
            <section className="section">
                <div className="has-text-centered">
                    <h1>Imagen de Logo</h1>
                </div>
                <div className="field">
                    <label className="label">Nombre de usuario</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    <p className="help is-success">El usuario es valido</p>
                </div>
            </section>
        </div>
        <div className="column is-6">

        </div>
    </div>
)

export default Login