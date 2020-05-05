import React, { useState } from 'react';
import {ToDoContainer} from '../screens/styledComponents/styledComponents';
import Form from '../components/Form';
import ListsContainer from '../components/ListsContainer';
 
const ToDoList = props => {
    const{formView, setFormView} = useState<boolean>(false);
    return (
        <ToDoContainer>
           {formView ?(
               <Form switchView={setFormView}></Form>
           ):(
               <ListsContainer switchView={setFormView}></ListsContainer>
           )}
        </ToDoContainer>
    );
};
 
export default ToDoList;

