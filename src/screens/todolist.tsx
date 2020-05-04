import React, { useState } from 'react';
import {ToDoContainer} from '../screens/styledComponents/styledComponents';
import Form from '../components/Form';
import ListsContainer from '../components/ListsContainer';
 
const ToDoList = props => {
    const{formView, setFormView} = useState<boolean>(false);
    return (
        <ToDoContainer>
           {formView ?(
               <Form></Form>
           ):(
               <ListsContainer></ListsContainer>
           )}
        </ToDoContainer>
    );
};
 
export default ToDoList;

