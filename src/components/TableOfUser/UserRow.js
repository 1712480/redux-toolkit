import React from 'react';
import { deleteUser } from '../../reducers/user/userSlice';
import { useDispatch } from 'react-redux';

function User({ user }){
    const dispatch = useDispatch();

    return (
        <tr>
            <th scope="row">{user.id ? user.id : ''}</th>
            <td>{user.name ? user.name : ''}</td>
            <td>{user.email ? user.email : ''}</td>
            <td>{user.active ? 'True' : 'False'}</td>
            <td>
                <button onClick={() => dispatch(deleteUser(user.id))} type="button" className="btn btn-danger" aria-pressed="false">
                    DELETE
                </button>
            </td>
        </tr>
    )
}

export default User;