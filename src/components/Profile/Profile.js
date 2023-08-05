// import user from "../data/user.json";

   import { Description, Avatar, Name, Tag, Location, Profile } from "./Profile.styled";

export const ProfileSM = ({ user: {username, avatar, tag, location, stats: {followers, views, likes}}}) => {
  return ( 
  <Profile>
    <Description>
      <Avatar src={avatar} alt={username}photo/>
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </Profile>
  )
}