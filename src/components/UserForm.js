import React from 'react';
import { addUser } from '../reducers/user/userSlice';
import { useDispatch } from 'react-redux';

function AddForm() {
    let name, email, active;
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addUser({
            name: name.value,
            email: email.value,
            active: active.checked
        }));
        
        name.value = '';
        email.value = '';
        active.checked = false;
    }

    return (
        <div className="row justify-content-center">
            <form onSubmit={onSubmit} className="col-6 card">
                <div className="form-group">
                    <label className="form-group">name:</label>
                    <input type="text" className="form-control" required ref={node => name = node} />
                </div>
                
                <div className="form-group">
                    <label className="form-group">email:</label>
                    <input type="text" className="form-control" required ref={node => email = node} />
                </div>

                <div className="form-group">
                    <label className="form-group">active: </label>
                    <input type="checkBox" ref={node => active = node} />
                </div>

                <button type="submit" className="btn btn-success">Add user</button>
            </form>
        </div>
    )
}

export default AddForm;