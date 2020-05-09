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
    backgroundColor: orange;
    padding:5px;
    width: 20px;
    height: 50px;
    borderRadius: 50px;
    marginLeft: 10px;
    marginBottom: 10px;
`
