import * as actionTypes from '../actions/types/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleElement'

export interface ITodoListReducer {
        todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        title:'First',
        description:'First Description' 
    },
    {
        title:'Second',
        description:'Second Description'
    }]
    
});


export default (state = defaultState(),action: any): ITodoListReducer => {
    switch(action.type){
        case actionTypes.SET_NEW_ELEMENT:{
            return{
                ...state,
                todoList:[...state.todoList, action.newElement]
            }
        }
        default:{
            return state;
        }
    }
};
