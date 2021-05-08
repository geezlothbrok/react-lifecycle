import React, { Component } from 'react'

export default class UsersClass extends Component {
    constructor(props) {
        super(props)
        this.state= { 
        users:[],
    }
    }
    componentWillUnmount() {}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
            return response.json();
            console.log(response)
        })
        .then((jsonData)=>{
            console.log(jsonData)
            this.setState({users: jsonData});
        });
    }
    render() {
        return (
            <div>
               {this.state.users.map((user)=> {
                   return (
                       <div>
                           <p>
                               <strong>Name:</strong> {user.name}
                           </p>
                           <p>
                               <strong>Username:</strong> {user.username}
                           </p>
                           <p>
                               <strong>email:</strong> {user.email}
                           </p>
                       </div>
                   )
               })} 
            </div>
        )
    }
}
