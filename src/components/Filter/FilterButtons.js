import React from 'react';
import Button from './Button.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectState, setFilter } from '../../reducers/filter/filterSlice';
import Filter from '../../reducers/filter/filterState';

function FilterButtons(){
    const currentFilter = useSelector(selectState);
    const dispatch = useDispatch()

    return (
        <div className="row justify-content-center">
            <label className="w-100 d-flex justify-content-center">Filter</label>
            <ul className="pagination">
                <Button filter={Filter.ALL} 
                        active={currentFilter === Filter.ALL}
                        onClick={() => dispatch(setFilter(Filter.ALL))}>
                    All
                </Button>

                <Button filter={Filter.ACTIVE} 
                        active={currentFilter === Filter.ACTIVE}
                        onClick={() => dispatch(setFilter(Filter.ACTIVE))}>
                    Active
                </Button>

                <Button filter={Filter.NON_ACTIVE} 
                        active={currentFilter === Filter.NON_ACTIVE}
                        onClick={() => dispatch(setFilter(Filter.NON_ACTIVE ))}>
                    Non-active
                </Button>
            </ul>
            
        </div>
    )
}

export default FilterButtons;
