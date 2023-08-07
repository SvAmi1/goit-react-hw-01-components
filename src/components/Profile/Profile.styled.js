import styled from 'styled-components';

export const Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
background: whitesmoke;
outline: 2px solid gray;
border-radius: 6px;
margin: 20px auto 0;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
height: 100%;

/* backgroundColor: blue;  */
`;

export const Avatar = styled.img`
width: 100px;
height: 100px;
margin-bottom: 5px;
margin-top: 15px;
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: 700;
color: black;
margin: 0 0 5px 0;
&:hover {
    scale: 1.05;
  }
`;

export const Tag = styled.p`
font-size: 16px;
color: gray;
margin: 0 0 5px 0;
&:hover {
    scale: 1.05;
  }
`;

export const Location = styled.p`
font-size: 18px;
color: gray;
margin: 0 0 15px 0;
&:hover {
    scale: 1.05;
  }
`;

export const UserStats = styled.ul`
display: flex;
flex-direction: row;
gap: 5px;
justify-content: center;
width: 100%;
margin:0px auto;
padding: 0px;
background-color: #bde5f2;
border-top: 1px solid #ddd;
`;

export const UserStatsItem = styled.li`
display: flex;
flex-direction: column;
/* gap: 5px; */
align-items: center;
align-content: first baseline;
padding: 10px;
&:hover {
    scale: 1.05;
  }
`;

export const UserStatsParam = styled.span`
font-size: 12px;
margin-bottom: 5px;
`;

export const UserParamValue = styled.span`
font-size: 12px;
font-weight: 700;
margin-bottom: 10px;
`;