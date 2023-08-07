
import { StatsItem, StatsList, Title, Wrapper } from "./Statistics.styled";

export const Statistics = ({ items,title }) => {
    return (
        <Wrapper>
           <Title>{title}Upload stats</Title>

            <StatsList>
        {items.map((item) => (
          <StatsItem  key={item.id} dataId={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatsItem>
        ))}
            </StatsList>
        </Wrapper>

     );
    }