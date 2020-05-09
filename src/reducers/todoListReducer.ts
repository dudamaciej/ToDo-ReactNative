import * as actionTypes from '../actions/types/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleElement'

export interface ITodoListReducer {
        todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        title:'Sample',
        description:'Sample Description',
        index: Date.now().toString()
    },
   ]
    
});


export default (state = defaultState(),action: any): ITodoListReducer => {
    switch(action.type){
        case actionTypes.SET_NEW_LIST:{
            return{
                ...state,
                todoList:[...state.todoList, action.newElement]
            }
        }
        case actionTypes.REMOVE_LIST: {
            return {
                ...state,
                todoList: state.todoList.filter(list => list.index != action.index) 
            };
        }
        case actionTypes.EDIT_LIST:{
            return {
                ...state,
                
            }
        }
        default:{
            return state;
        }
    }
};
