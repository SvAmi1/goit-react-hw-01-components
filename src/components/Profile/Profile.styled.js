import styled from 'styled-components';

export const Profile = styled.div`
display: flex;
alignItems: 'center';
/* backgroundColor: blue; */
`;

export const Description = styled.div`
display: flex;
alignItems: 'center';
backgroundColor: blue;
`;

export const Avatar = styled.img`
width: 100px;
height: 100px;
`;

export const Name = styled.p`
font-size: 20px;
color: black;
`;

export const Tag = styled.p`
font-size: 16px;
color: gray;
`;

export const Location = styled.p`
font-size: 18px;
color: gray;
`;

export const UserStats = styled.ul`
display: flex;
justify-content: center;
width: 100%;
margin:0px auto;
padding: 0px;
background-color: #e9eef3;
    border-top: 1px solid #ddd;
`;

export const UserStatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`;

export const UserStatsParam = styled.span`
font-size: 10px;
margin-bottom: 5px;
`;

export const UserParamValue = styled.span`
font-size: 12px;
margin-bottom: 10px;
`;