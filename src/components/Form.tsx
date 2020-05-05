import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {TextInput,View,Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setNewElementToDoList} from '../actions/todolistActions';
import {ISingleElementList} from '../entities/todoSingleElement'

type setNewElementToDoList = ReturnType<typeof setNewElementToDoList>;

interface IForm{
    closeForm:() => void;
}

const Form: FC<IForm> = props =>{
    const dispatch = useDispatch();
    const[titleInput, setTitleInput] = useState<string>('');
    const[descriptionInput, setDescriptionInput] = useState<string>('');
    
    const titleValueChange = (txt) => {
        setTitleInput(txt.nativeEvent.text);
    }
    const descriptionValueChange = (txt) => {
        setDescriptionInput(txt.nativeEvent.text);
    }
    const saveDate = () => {
        dispatch<setNewElementToDoList>(setNewElementToDoList({
            title: titleInput,
            description: descriptionInput
        }as ISingleElementList
        ));
        props.closeForm();
    }


    return(
        <View>
            <CustomTextInput value ={titleInput} onChange={titleValueChange} placeholder="Title"/>
            <CustomTextInput value ={descriptionInput} onChange={descriptionValueChange} placeholder="Description"/>
            <Button title="SAVE" onPress ={saveDate}/>
        </View>
    )
};

export default Form;

const CustomTextInput = styled.TextInput`
    border: 1px solid;
    padding: 10px;
    color: black;
    width: 100%;
`