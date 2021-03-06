import styled from 'styled-components/native';

export const ProfilePage = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 40px;
    flex:1;
`
export const ProfileImage = styled.Image`
    marginTop: 30px;
    width: 100px;
    height:100px;
    marginBottom: 10px;
    borderRadius: 50px;
`
export const Header = styled.Text`
    font-size: 16px;
    color: #00dc00;
    marginBottom: 20px;
    marginTop:10px;
`
export const AboutMe = styled.Text`
    marginTop:8px;
    marginBottom: 8px;
    font-size: 15px;
    textAlign: center;
`
export const Address = styled.Text`
    textAlign: center;
    marginTop:8px;
    marginBottom: 8px;
    font-size: 12px;
`
export const HomeContainer = styled.ScrollView`
    width: 100%;
    margin-top: 20px;
    flex:1;
`
export const HomeView = styled.View`
    align-items: center;
`
export const SampleImage = styled.Image`
    align-self: center;
    width: 300px;
    height:200px;
`
export const Post = styled.View`
    align-self: center;
    marginTop: 20px;
    marginBottom: 20px;
  
`
export const PostText = styled.Text`
    align-self: center;
`
export const PostLeft = styled(Post)`
    align-self: flex-start;
`
export const PostRight = styled(Post)`
    align-self: flex-end; 
`
export const PostRotated = styled(Post)`
    align-self: center;
    transform: rotate(90deg);
    marginTop: 30px; 
`
export const ToDoContainer = styled.View`
    width: 100%;
    margin-top: 20px;
    flex:1;
`