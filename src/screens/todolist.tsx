import React, { useState } from 'react';
import {ToDoContainer} from '../screens/styledComponents/styledComponents';
import Form from '../components/Form';
import ListsContainer from '../components/ListsContainer';
 
const ToDoList = props => {
    const[formView, setFormView] = useState<boolean>(false);

    const openForm = () => {
        setFormView(true);
    }
    const closeForm = () => {
        setFormView(false);
    }
    return (
        <ToDoContainer>
           {formView ?(
               <Form closeForm={closeForm}></Form>
           ):(
               <ListsContainer openForm={openForm}></ListsContainer>
           )}
        </ToDoContainer>
    );
};
 
export default ToDoList;

