import React from 'react';
import FilterButtons from './Filter/FilterButtons';
import DisplayWithFilter from './TableOfUser/DisplayWithFilter';
import UserForm from './UserForm';

const App = () => (
    <div className="container justify-content-center">
        <FilterButtons />
        <DisplayWithFilter />
        <UserForm />
    </div>
)

export default App;