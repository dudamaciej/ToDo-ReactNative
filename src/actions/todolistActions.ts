import * as actionTypes from './types/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleElement'

export const setNewElementToDoList = (newElement:ISingleElementList) =>({
    type: actionTypes.SET_NEW_LIST,
    newElement
})

export const removeList =  (index) =>{
    
    return{
    type: actionTypes.REMOVE_LIST,
    index,
    }
}

