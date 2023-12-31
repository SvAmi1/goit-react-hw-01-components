// import user from "../data/user.json";

import { Description, Avatar, Name, Tag, Location, Profile, UserStats, UserStatsItem, UserStatsParam, UserParamValue } from "./Profile.styled";

export const ProfileSM = ({ userData: {username, avatar, tag, location, stats: {followers, views, likes}}}) => {
  return ( 
  <Profile>
    <Description>
      <Avatar src={avatar} alt={username}photo/>
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <UserStats>
      <UserStatsItem>
        <UserStatsParam>Followers</UserStatsParam>
        <UserParamValue>{followers}</UserParamValue>
      </UserStatsItem>
      <UserStatsItem>
        <UserStatsParam>Views </UserStatsParam>
        <UserParamValue>{views}</UserParamValue>
      </UserStatsItem>
      <UserStatsItem>
        <UserStatsParam>Likes</UserStatsParam>
        <UserParamValue>{likes}</UserParamValue>
      </UserStatsItem>
      </UserStats>
  </Profile>
  )
}