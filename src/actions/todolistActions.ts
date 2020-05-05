import * as actionTypes from './types/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleElement'

export const setNewElementToDoList = (newElement:ISingleElementList) =>({
    type: actionTypes.SET_NEW_ELEMENT,
    newElement
})