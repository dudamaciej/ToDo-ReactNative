import React, {FC, useState} from 'react';
import styled from 'styled-components';
import CreateListButton from '../components/CreateListButton';
import {useSelector} from 'react-redux';
import{Text} from 'react-native';
import {IState} from '../reducers/index';
import {ITodoListReducer} from '../reducers/todoListReducer';
import { ISingleElementList } from '../entities/todoSingleElement';

const ListsContainer: FC = props =>{
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    return{

        {todoListState.todoList.map((element: ISingleElementList,index: number) =>
            <List key={index}>
                <Text{element.title}></Text>
                 <Text{element.description}></Text>
            </List>
        )}
       
    }
};

export default ListsContainer;

const List = styled.View`
    border 1px solid #00dc00;
    margin 40px 20px 0 20px;
`