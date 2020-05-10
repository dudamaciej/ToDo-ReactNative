import React, {FC, useState} from 'react';
import styled from 'styled-components';
import CreateListButton from '../components/CreateListButton';
import RemoveListButton from '../components/RemoveListButton';
import EditListButton from '../components/EditListButton';
import {useSelector,useDispatch} from 'react-redux';
import{Text,View, ScrollView} from 'react-native';
import {IState} from '../reducers/index';
import {ITodoListReducer} from '../reducers/todoListReducer';
import { ISingleElementList } from '../entities/todoSingleElement';
import {Header} from '../screens/styledComponents/styledComponents'
import{removeList} from '../actions/todolistActions';

export interface IListsConstainer{
    openForm: () => void;
    openEditForm: (element:ISingleElementList) => void;
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
                    <ListContent>
                        <RowWrapper>
                            <Title style={{fontWeight: 'bold'}}>{element.title}</Title>
                        </RowWrapper>
                        <RowWrapper>
                            <Descritpion>{element.description}</Descritpion>
                        </RowWrapper>
                    </ListContent>
                    <ButtonBox>
                        <EditListButton onPress={() => props.openEditForm(element)}/>
                        <RemoveListButton onPress={() => deleteList(element.index)} />
                    </ButtonBox>
                </List>
            )}
            </View>
       </ScrollView>
       <ButtonWrapper><CreateListButton onPress={goToForm}/></ButtonWrapper>
       </Wrapper>
        
    )
};

export default ListsContainer;

const RowWrapper = styled.View`
flexDirection: row; 
`
const ListContent = styled.View`
    width: 70%;
    flexDirection: column;
    flexWrap: wrap;
    flexGrow: 1;
    flex:1;
`
const ButtonBox = styled.View`
   flexDirection: row;
`
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
    justifyContent: space-between;
    borderBottomColor: #00dc00;
    borderBottomWidth:  2px;
    margin: 40px 20px 0 20px;
    width: 90%;
`
const Title = styled.Text`
    flex:1;
    fontSize: 20px;
    flexWrap: wrap;
`
const Descritpion = styled.Text`
    flex1;
    marginBottom:5px;
    flexWrap: wrap;
`
