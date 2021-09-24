import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


interface FetchUser {
  users: user[],
  foundUsers: user[],
  SearchString: string,
}

interface user {
  _id?: string,
  Vorname: string,
  Nachname: string,
  Message: string,
  Anhang?: any
}

class User extends React.Component<RouteComponentProps<{}>, FetchUser> {

  state = {
    users: [],
    foundUsers: [],
    SearchString: "",
  };

  filter = (e: any) => {
    const keyword = e.target.value;

    if (this.state.SearchString !== '') {
      const results = this.state.users.filter((user:user) => {
        return user.Vorname.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      this.setState({ foundUsers: results });
    } else {
      this.setState({ foundUsers: this.state.users });
      // If the text field is empty, show all users
    }
    this.setState({ SearchString: keyword });
  };

  componentDidMount() {
    fetch(`http://localhost:3000/user`)
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    const searchvalue = this.state.SearchString;
    const searchfunction = this.filter;
    return (
      <div>
        <h3>User List</h3>
        <small className="text-muted">A list of all registered Users </small>
        <p>
          <NavLink to={'/CreateUser'}>
            Add a new User?
          </NavLink>
        </p>

        {
          this.state.foundUsers.length === 0 ? User.renderUserTable(this.state.users, searchvalue, searchfunction)
            : User.renderUserTable(this.state.foundUsers, searchvalue, searchfunction)
        }
      </div>
    );
  }

  private static renderUserTable(users: user[], searchvalue: any, searchfunction: any) {
    let i = 1 ;
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Vorname</TableCell>
              <TableCell>Nachname</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Anhang</TableCell>
              <TableCell>
                  <input className="form-control" type="search" value={searchvalue} onChange={searchfunction} placeholder="Type something to search"/>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(users =>
              <TableRow key={users._id}>
                <TableCell> {i++} </TableCell>
                <TableCell> {users.Vorname} </TableCell>
                <TableCell> {users.Nachname} </TableCell>
                <TableCell> {users.Message} </TableCell>
                <TableCell> {users.Anhang} </TableCell>
                <TableCell>
                  <li><NavLink to={{ pathname: "/EditUser", state: { _id : users._id, Vorname: users.Vorname, Nachname: users.Nachname, Message: users.Message, Anhang: users.Anhang } }} >Edit</NavLink></li>
                  <li><NavLink to={{ pathname: "/DeleteUser", state: { _id: users._id, Vorname: users.Vorname, Nachname: users.Nachname, Message: users.Message, Anhang: users.Anhang } }} >Delete</NavLink></li>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default User;