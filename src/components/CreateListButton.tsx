import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity,Text } from 'react-native';

interface ButtonProps {
    onPress: () => void;
}

const CreateListButton: FC<ButtonProps> = props => {
    return (
        <ButtonContainer>
            <ButtonText>+</ButtonText>
        </ButtonContainer>
    )
}
export default CreateListButton;

const ButtonContainer = styled.TouchableOpacity`
    position: 'absolute;
    zIndex: 11;
    right: 20;
    bottom: 90;
    backgroundColor: #00dc00;
    width: 90;
    height: 90;
    borderRadius: 50;
    align-items: center;
    justifyContent: center;
`
const ButtonText = styled.Text`
    color: #fff;
    fontSize: 30;
`