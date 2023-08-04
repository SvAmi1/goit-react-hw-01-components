import user from ../data.user.json;
import {Wrapper} from  Profiler.styled.js;

export const Description = ({ item: {username, avatar, tag, location}}) => {
  return (
    <Wrapper>
      <img src={avatar} alt={username}photo/>
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </Wrapper>
  )
}