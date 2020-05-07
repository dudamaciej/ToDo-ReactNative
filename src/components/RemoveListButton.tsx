import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity,Text } from 'react-native';

interface ButtonProps {
    onPress: (index: string) => void;
}

const CreateListButton: FC<ButtonProps> = props => {
    return (
        <ButtonContainer onPress={props.onPress}/>
    )
}
export default CreateListButton;

const ButtonContainer = styled.TouchableOpacity`
    alignSelf: flex-end;
    backgroundColor: red;
    padding:5px;
    width: 20;
    height: 50;
    borderRadius: 50;
    align-items: center;
    justifyContent: center;
    marginLeft: 10px;
    marginBottom: 10px;
`
