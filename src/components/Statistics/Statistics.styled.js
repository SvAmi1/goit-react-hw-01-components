import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  background: whitesmoke;
  outline: 2px solid gray;
  border-radius: 6px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin: 15px auto;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto;
  font-size: 14px;
  font-weight: 600;
  padding:15px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    switch (props.dataId) {
      case 'id-1':
        return `#f71707`;
      case 'id-2':
        return `#f7f707`;
      case 'id-3':
        return `#13f707`;
      case 'id-4':
        return `#07f7f7`;
      case 'id-5':
        return `#c307f7`;
      default:
        return `transparent`;
    }
  }};
  &:hover {
    scale: 1.05;
  }
`;