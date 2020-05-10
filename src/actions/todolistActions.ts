import * as actionTypes from './types/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleElement'

export const setNewElementToDoList = (newElement:ISingleElementList) =>{
    return{
    type: actionTypes.SET_NEW_LIST,
    newElement
    }
}

export const removeList =  (index) =>{
    return{
    type: actionTypes.REMOVE_LIST,
    index,
    }
}

export const editList = (oldList:ISingleElementList,title: string, description: string) =>{
    return{
        type: actionTypes.EDIT_LIST,
        oldList,
        title,
        description
    }
}