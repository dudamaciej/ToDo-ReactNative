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
            let editedlist = state.todoList.find(list=>{
                return list.index === action.oldList.index;
            })
            let index = state.todoList.indexOf(editedlist)

            editedlist = {
                title: action.title,
                description: action.description,
                index: editedlist.index
            }
            state.todoList[index]= editedlist;
            
            return state

           
        }
        default:{
            return state;
        }
    }
};
