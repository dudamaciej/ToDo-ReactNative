import React, {FC, useState} from 'react';
import styled from 'styled-components';
import CreateListButton from '../components/CreateListButton';
import RemoveListButton from '../components/RemoveListButton';
import {useSelector,useDispatch} from 'react-redux';
import{Text,View, ScrollView} from 'react-native';
import {IState} from '../reducers/index';
import {ITodoListReducer} from '../reducers/todoListReducer';
import { ISingleElementList } from '../entities/todoSingleElement';
import {Header} from '../screens/styledComponents/styledComponents'
import{removeList} from '../actions/todolistActions';
interface IListsConstainer{
    openForm: () => void;
}

const ListsContainer: FC<IListsConstainer> = props =>{
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const Dispatch = useDispatch();
    const goToForm =() =>{
        props.openForm();
    }
    const deleteList = (index)=>{
        Dispatch(removeList(index));
      
    }
    return(
        <Wrapper>
        <ScrollView>
            <View>
            <View style={{alignItems: 'center'}}>
            <Header style={{fontWeight: 'bold'}}>────  TO DO LIST  ────</Header>
            </View>
            {todoListState.todoList.map((element: ISingleElementList,index: number) =>
                <List key={index}>
                    <View>
                        <Title style={{fontWeight: 'bold'}}>{element.title}</Title>
                        <Descritpion>{element.description}</Descritpion>
                    </View>
                    <RemoveListButton onPress={() => deleteList(element.index)} />
                   
                </List>
            )}
            </View>
       </ScrollView>
       <ButtonWrapper><CreateListButton onPress={goToForm}/></ButtonWrapper>
       </Wrapper>
        
    )
};

export default ListsContainer;

const Wrapper = styled.View`
    position: relative;
    flex:1;
`
const ButtonWrapper = styled.View`
    position: absolute;
    bottom: 120px;
    right: 120px;
    z-index: 999;
`
const List = styled.View`
flexDirection: row;
borderBottomColor: #00dc00;
borderBottomWidth:  2;
margin: 40px 20px 0 20px;
justifyContent: space-between;
`
const Title = styled.Text`
    marginBottom:5;
    fontSize: 20;
`
const Descritpion = styled.Text`
    marginTop:5;
    marginBottom:3;
`
