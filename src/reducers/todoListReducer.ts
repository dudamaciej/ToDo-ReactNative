import * as actionTypes from '../actions/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleElement'

export interface ITodoListReducer {
        todolist: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => {(
    todoList: [{
        title:'First',
        description:'First Description' 
    },
    {
        title:'Second',
        description:'Second Description'
    }]
    
)};


export default (state = defaultState(),action: any): ITodoListReducer => {
    switch(action.type){
        case actionTypes.SET_NEW_ELEMENT:{
            return{
                ...state,
                todolist:[...state.todolist, action.newElement]
            }
        }
        default:{
            return state;
        }
    }
};
