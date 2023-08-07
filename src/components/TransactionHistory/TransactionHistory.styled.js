import styled from 'styled-components';

export const TrTable = styled.table`
  /* display: flex; */
  width: 400px;
  background: whitesmoke;
  outline: 2px solid gray;
  border-radius: 6px;
  margin: 0 auto 20px;
  padding: 10px 20px;
  /* border: 1px solid black; */
  text-align: center;
  text-transform: capitalize;
  `;

export const TrHead = styled.thead`
 text-transform: uppercase;
 height: 20px;
 padding: 10px 0;
`;

export const HeadRow = styled.tr`
 background-color: #e3c119;
 min-width: 133px;
 height: 20px;
  color: #fff;
  padding: 10px 0;
  width: 350px;
`;

export const HeadName = styled.th`
 padding: 10px 0;
 border: 1px solid gray;
  border-radius: 6px;
  &:hover {
    scale: 1.05;
  }
`;

export const TableRow = styled.tr`
border: 1px solid black; 
`;

export const TableData = styled.td`
  padding: 10px 0;
  border: 1px solid gray;
  border-radius: 6px;
  background-color: whitesmoke;
  min-width: 133px;
  &:hover {
    scale: 1.05;
  }
`;