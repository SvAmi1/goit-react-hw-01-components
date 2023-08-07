import { Wrapper, FrList, FrItem, Status, Avatar, Name } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <Wrapper>
          <FrList>
        {friends.map((friend) => (
          <FrItem  key={friend.id}>
            <Status status={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt={friend.name}photo/>
            <Name>{friend.name}</Name>
          </FrItem>
        ))}
            </FrList>
        </Wrapper>
     );
    }
