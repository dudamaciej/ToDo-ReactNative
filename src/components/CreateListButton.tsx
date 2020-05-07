import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity,Text } from 'react-native';

interface ButtonProps {
    onPress: () => void;
}

const CreateListButton: FC<ButtonProps> = props => {
    return (
        <ButtonContainer onPress={props.onPress}>
           <ButtonText style={{fontWeight: 'bold'}}>+</ButtonText>
        </ButtonContainer>
    )
}
export default CreateListButton;

const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    backgroundColor: #00dc00;
    width: 90;
    height: 90;
    marginTop: 10px;
    marginRight:5px;
    borderRadius: 50;
    align-items: center;
    justifyContent: center;
    marginLeft: 10px;
    marginBottom: 10px;
`
const ButtonText = styled.Text`
    color: #fff;
    fontSize: 30;
`

