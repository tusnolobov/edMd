import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 1.6rem;
`;

export const Logo = styled.h3`
  margin: 0;
  font-size: 4.8rem;
  color: #152833;
`;

export const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1.8rem;
  color: ${props => (props.preview ? '#fff' : '#46a1f4')};
  border-radius: 0.3rem;
  border: 1px solid #46a1f4;
  outline: none;
  background-color: ${props => (props.preview ? '#46a1f4' : 'transparent')};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
