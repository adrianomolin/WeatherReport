import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1090px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 2rem;
`;

export const TemperatureContainer = styled.div`
  height: 30rem;
  width: 30rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.background};
  background-image: url('./temperature.png');
`;
