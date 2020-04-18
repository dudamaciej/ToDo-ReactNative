import React from 'react';
import { View, Text} from 'react-native';
import {ProfileImage,Header,HomeContainer,HomeView,SampleImage,Post,PostText,PostRight,PostLeft, PostRotated} from '../screens/styledComponents/styledComponents'


const Home = props => {
    return (
        <HomeContainer>
            <HomeView>
                <ProfileImage source={ require('../assets/profilePhoto.png')}/>
                <Header style={{fontWeight: 'bold'}}>────────  HOME  ────────</Header>
            </HomeView>
            <Post>
                <SampleImage source ={require('../assets/sampleImage.jpg') }></SampleImage>
                <PostText>Just a simple text</PostText>
            </Post>
            <PostLeft>
                <SampleImage source ={require('../assets/sampleImage.jpg') }></SampleImage>
                <PostText>Just a simple text</PostText>
            </PostLeft>
            <PostRight>
                <SampleImage source ={require('../assets/sampleImage.jpg') }></SampleImage>
                <PostText>Just a simple text</PostText>
            </PostRight>
            <PostRotated>
                <SampleImage source ={require('../assets/sampleImage.jpg') }></SampleImage>
                <PostText>Just a simple text</PostText>
            </PostRotated>
        </HomeContainer>
    );
};
 
export default Home;