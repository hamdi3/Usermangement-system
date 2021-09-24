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

class EditUser extends React.Component<RouteComponentProps<{}>, user> {

    state = {
        _id: "",
        Vorname: "",
        Nachname: "",
        Message: "",
        Anhang: "",
    }

    handleChangeVorname = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ Vorname: e.target.value });
        console.log(this.state.Vorname)
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
    
    componentDidMount() {
        const location = this.props.location;
        const state = location.state as user;

        fetch(`http://localhost:3000/user/` +  state._id )
          .then(res => res.json())
          .then(users => {
            this.setState({
                _id: users._id,
                Vorname: users.Vorname,
                Nachname: users.Nachname,
                Message: users.Message,
                Anhang: users.Anhang,
            });
          });
      }

    handleClick = (e: any) => {
        const location = this.props.location;
        const state = location.state as user;

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _id: this.state._id,
                Vorname: this.state.Vorname,
                Nachname: this.state.Nachname,
                Message: this.state.Message,
                Anhang: this.state.Anhang,
            })
        };

        fetch(`http://localhost:3000/user/` + state._id, requestOptions)
            .then(res => res.json())
            .then(users => {
                this.setState({
                    _id: users._id,
                    Vorname: users.Vorname,
                    Nachname: users.Nachname,
                    Message: users.Message,
                    Anhang: users.Anhang,
                });
            });
        let path = '/';
        this.props.history.push(path);
    }

    public render() {
        const location = this.props.location;
        const state = location.state as user;

        return <div>
            <h2>Edit User</h2>
            <form className="row g-3">
                <div className="col-md-4">
                <label className="form-label">Vorname</label>
                <input className="form-control" placeholder={state.Vorname} onChange={this.handleChangeVorname}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">NachName</label>
                    <input className="form-control"  placeholder={state.Nachname} onChange={this.handleChangeNachname}/>
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Message</label>
                    <input className="form-control"  placeholder={state.Message} onChange={this.handleChangeMessage}/>
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Anhang</label>
                    <input className="form-control"  placeholder={state.Anhang} onChange={this.handleChangeAnhang}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Submit Changes</button>
                </div>   
                <NavLink to={'/'} exact activeClassName='active'>Back to List</NavLink> 
            </form>
        </div>;
    }
}

export default EditUser