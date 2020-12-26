import React from 'react';
import styled from 'styled-components';
import noimage from '../../../static/noimage.png';
import nobanner from '../../../static/placeholder_profile_banner.jfif';
import { Button } from 'react-bootstrap';
import { CalendarTodayIcon } from '@material-ui/icons';

let ProfileInfoDiv = styled.div`

`;

let ProfileBanner = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
`;
let ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
    top: -50px;
    left: 20px;
    border-radius: 50%;
    background-color: white;
    border-width: 2px;
    border-color: #eeeeee;
    border-style: solid;
`;

let Username = styled.div`
    font-size: 0.8em;
`;
let FirstLastName = styled.div`
    font-size: 1.3em;
`;

let Name = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap');
    font-family: 'Open Sans', sans-serif;
    height: 3em;
    margin-top: -30px;
`;

let JoinedDate = styled.div`
    float: right;
    position: relative;
    top: -20px;
    color: #8f8f8f;
`;

let Bio = styled.div`
    border: 2px solid #8ea09f;
    border-radius: 4px;
    min-height: 5em;
`;

let BioDiv = styled.span`
    position: relative;
    background-color: #eeeeee;
    top: -0.9em;
    left: 1em;
    font-size: 1.4em;
    width: 2em;
    text-align: center;
`;


let FollowEditProfileButton = styled(Button)`
    float: right;
    margin: 10px ;
    border-radius: 20px;
`;

let EditProfileButton = styled(FollowEditProfileButton)`
    
`;
let FollowProfileButton = styled(FollowEditProfileButton)`
    /* float:  */
`;
export default function UserInfo(props) {
    

    return (
        <ProfileInfoDiv>
            <ProfileBanner src={props.profileUser.profile_banner || nobanner } alt="" />
            <ProfileImage src={props.profileUser.profile_image || noimage} alt="" />
            {props.user?._id === props.profileUser._id ?
                <EditProfileButton>Edit Profile</EditProfileButton> :
                <FollowProfileButton>Follow</FollowProfileButton>}
                <Name >
                    <FirstLastName>{props.profileUser.first_name} {props.profileUser.last_name}</FirstLastName>
                    <Username>@{props.profileUser.username}</Username>
                    <JoinedDate>Joined { (new Date(props.profileUser.created_at).toLocaleString('en-US', {year: 'numeric', month: 'long'}))}</JoinedDate>
                </Name>
            <hr />
            <Bio>
                <BioDiv>Bio</BioDiv>
                {props.profileUser.bio}
            </Bio>
        </ProfileInfoDiv>
    )
}


{/*  */}