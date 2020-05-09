import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Header} from '../screens/styledComponents/styledComponents'
import {useDispatch} from 'react-redux';
import {editList} from '../actions/todolistActions';
import {ISingleElementList} from '../entities/todoSingleElement'

interface IEditForm{
    closeForm: () => void;
}

const EditForm: FC<IEditForm> = props =>{
    

    return(
        <FormView>
            <Header style={{fontWeight: 'bold'}}>────  EDIT TASK  ────</Header>
            <CustomTextInput value ={titleInput} onChange={titleValueChange} placeholder="Title"/>
            <CustomTextInput value ={descriptionInput} onChange={descriptionValueChange} placeholder="Description"/>
            <SaveButton onPress ={saveDate}>
                <ButtonText style={{fontWeight: 'bold'}}>SAVE</ButtonText>
            </SaveButton>
        </FormView>
    )
};

export default EditForm;

const SaveButton = styled.TouchableOpacity`
    marginTop: 30px;
    backgroundColor: #00dc00;
    color: #FFFFFF;
    padding: 10px;
    width: 90%;
    align-items: center;
    justifyContent: center;
    borderRadius: 10px;
`
const ButtonText = styled.Text`
    color: #fff;
    fontSize: 20px;
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