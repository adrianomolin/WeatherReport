import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 5rem;
  margin-bottom: 2rem;
`;

export const Cloud = styled.img`
  width: 11rem;
  height: 11rem;

  position: relative;
  top: -5rem;
  left: -4rem;
`;

export const Location = styled.div`
  color: ${({ theme }) => theme.colors.secondary.main};

  display: flex;
  justify-content: center;
  gap: 0.25rem;

  font-size: 0.875rem;
  font-weight: 700;
`;

export const Pin = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
