import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {ProfilePage,ProfileImage,Header,AboutMe,Address} from '../screens/styledComponents/styledComponents'
 
const Profile = props => {
    return (
        <ProfilePage>
           
            <ProfileImage source={ require('../assets/profilePhoto.png')}/>
            <Header style={{fontWeight: 'bold'}}>────────  ABOUT ME  ────────</Header>
            <Text style={{fontWeight: 'bold',fontSize:20}}>Sam Anderson</Text> 
            <AboutMe>CONSTRUCTION PROJECT MANAGER{"\n"} sam.anderson@gmail.com</AboutMe>
            <Text style={{fontWeight: 'bold'}}>MALE</Text> 
            <Address style={{fontWeight: 'bold',marginTop:30,fontSize:15}}>ADDRESS</Address> 
            <Address>Apt 58, 24/15, St. Paul Street,{"\n"} Palo Alto, California,{"\n"} USA, 92101</Address>
        </ProfilePage>
    );
};
export default Profile;

