import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
margin: 0 auto;
`;

export const FrList = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
align-content: center;
margin-left: 0;
`;

export const FrItem = styled.li`
display: flex;
flex-direction: row;
gap: 20px;
align-items: center;
width: 300px;
padding: 5px 15px;
margin: 0 auto;
background-color: whitesmoke;
outline: 2px solid gray;
border-radius: 6px;
transition: 200ms ease;
&:hover {
    scale: 1.05;
  }
`;

export const Status = styled.span`
display: flex;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({ status, theme }) =>
    status ? theme.colors.online : theme.colors.offline};
`;

export const Avatar = styled.img`
display: block;
width: 48px;
height: auto;
`;

export const Name = styled.p`
display: inline-block;
font-size: 20px;
color: #000;
`;

