import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  margin-bottom: 8.125rem;

  gap: 0.25rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 1rem;
  position: relative;
  top: -1.25rem;

  .number {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 5.5rem;
    font-weight: 700;
  }
`;

export const Average = styled.div`
  font-size: 1.25rem;
  font-weight: 700;

  gap: .25rem;

  display: flex;
  align-items: flex-start;
  flex-direction: row;

  .max {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .min {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

export const Tag = styled.div`
  color: ${({ theme }) => theme.colors.secondary.light};
  font-size: 1.5rem;
  font-weight: 700;
`;
