import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

interface user {
    _id?: string,
    Vorname: string,
    Nachname: string,
    Message: string,
    Anhang?: string
}

class CreateUser extends React.Component<RouteComponentProps<{}>, user> {

    state = {
        _id: "",
        Vorname: "",
        Nachname: "",
        Message: "",
        Anhang: "",
    }

    handleChangeVorname = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ Vorname: e.target.value });
    }
    handleChangeNachname = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ Nachname: e.target.value });
    }
    handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ Message: e.target.value });
    }
    handleChangeAnhang = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ Anhang: e.target.value });
    }
    
    handleClick = (e: any) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Vorname: this.state.Vorname,
                Nachname: this.state.Nachname,
                Message: this.state.Message,
                Anhang: this.state.Anhang,
            })
        };

        fetch(`http://localhost:3000/user`, requestOptions)
    
        let path = '/';
        this.props.history.push(path);
    }

    public render() {
        return <div>
            <h2>Create User</h2>
            <form className="row g-3">
                <div className="col-md-4">
                <label className="form-label">Vorname</label>
                <input className="form-control" onChange={this.handleChangeVorname}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">NachName</label>
                    <input className="form-control" onChange={this.handleChangeNachname}/>
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Message</label>
                    <input className="form-control"  onChange={this.handleChangeMessage}/>
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Anhang</label>
                    <input className="form-control" onChange={this.handleChangeAnhang}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Create User</button>
                </div>   
                <NavLink to={'/'} exact activeClassName='active'>Back to List</NavLink> 
            </form>
        </div>;
    }
}

export default CreateUser