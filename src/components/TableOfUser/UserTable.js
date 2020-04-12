import React from 'react';
import UserRow from './UserRow'; 

function UserTable({ userList }){
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">active</th>
                <th scope="col"/>
                </tr>
            </thead>
            <tbody>
                {userList.map(user => 
                    <UserRow key={user.id} user={user}/>
                )}
            </tbody>
        </table>
    )
}

export default UserTable;