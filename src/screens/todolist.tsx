import React, { useState } from 'react';
import {ToDoContainer} from '../screens/styledComponents/styledComponents';
import Form from '../components/Form';
import ListsContainer from '../components/ListsContainer';
import EditForm from '../components/EditForm';
import {IListsConstainer} from '../components/ListsContainer'
const ToDoList = props => {
    
    const openForm = () => {
        setView(<Form closeForm={closeView}/>);
    }
    const openEditForm = () => {
        setView(<EditForm closeForm={closeView}/>);
    }
    const closeView = () => {
        setView(<ListsContainer openEditForm={openEditForm} openForm={openForm}/>)
    }
    
    const[ToDoView, setView] = useState(<ListsContainer openEditForm={openEditForm} openForm={openForm}/>);
    return (
        <ToDoContainer>
           {ToDoView}
        </ToDoContainer>
    );
};
 
export default ToDoList;

