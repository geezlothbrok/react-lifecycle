import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UsersFunction() {
    const [users, setUsers] =useState([]);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            {users.map((user) =>{
                return (
                    <div>
                        <p>
                            <strong>Name:</strong> {user.name}
                        </p>
                        <p>
                            <strong>Username:</strong> {user.username}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        
                    </div>
                )
            })}
        </div>
    )
};

export default UsersFunction;