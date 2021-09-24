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

class DeleteUser extends React.Component<RouteComponentProps<{}>, user> {

    state = {
        _id: "",
        Vorname: "",
        Nachname: "",
        Message: "",
        Anhang: "",
    }

      handleClick = (e: any) => {
        const location = this.props.location;
        const state = location.state as user;

        fetch(`http://localhost:3000/user/` + state._id, {method:"Delete"})
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
                <input className="form-control" value ={state.Vorname} disabled />
                </div>
                <div className="col-md-4">
                    <label className="form-label">NachName</label>
                    <input className="form-control"  value={state.Nachname} disabled />
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Message</label>
                    <input className="form-control"  value={state.Message} disabled />
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Anhang</label>
                    <input className="form-control"  value={state.Anhang} disabled />
                </div>
                <div className="col-md-8">
                    <label  className="form-label">Are you sure you want to delete this user?</label>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={this.handleClick}>Delete User</button>
                </div>   
                <NavLink to={'/'} exact activeClassName='active'>Back to List</NavLink> 
            </form>
        </div>;
    }
}
export default DeleteUser