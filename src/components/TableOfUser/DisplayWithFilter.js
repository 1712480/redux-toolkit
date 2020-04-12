import React from 'react';
import { useSelector } from 'react-redux';
import FilterState from '../../reducers/filter/filterState';
import UserTable from './UserTable';

function DisplayWithFilter() {
    const state = useSelector(state => state);
    let userList;

    switch(state.filter){
        case FilterState.ALL:
            userList = [...state.user];
            break;
        case FilterState.ACTIVE:
            userList = state.user.filter(user => user.active);
            break;
        case FilterState.NON_ACTIVE:
            userList = state.user.filter(user => !user.active);
            break;
        default:
            userList = [];
    }

    return (
        <UserTable userList={userList} />
    )
}

export default DisplayWithFilter;