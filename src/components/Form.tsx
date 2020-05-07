import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Header} from '../screens/styledComponents/styledComponents'
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
            description: descriptionInput,
            index: Date.now().toString(),
        }as ISingleElementList
        ));
        props.closeForm();
    }


    return(
        <FormView>
            <Header style={{fontWeight: 'bold'}}>────  ADD NEW TASK  ────</Header>
            <CustomTextInput value ={titleInput} onChange={titleValueChange} placeholder="Title"/>
            <CustomTextInput value ={descriptionInput} onChange={descriptionValueChange} placeholder="Description"/>
            <SaveButton onPress ={saveDate}>
                <ButtonText style={{fontWeight: 'bold'}}>SAVE</ButtonText>
            </SaveButton>
        </FormView>
    )
};

export default Form;

const SaveButton = styled.TouchableOpacity`
    marginTop: 30px;
    backgroundColor: #00dc00;
    color: #FFFFFF;
    padding: 10px;
    width: 90;
    align-items: center;
    justifyContent: center;
    borderRadius: 10;
`
const ButtonText = styled.Text`
    color: #fff;
    fontSize: 20;
`

const FormView = styled.View`
    marginTop: 50%;
    align-items: center;
    justifyContent: center;
`

const CustomTextInput = styled.TextInput`
    border: 2px solid  #00dc00;
    padding: 10px;
    color: black;
    width: 60%;
    marginTop:30px;
`