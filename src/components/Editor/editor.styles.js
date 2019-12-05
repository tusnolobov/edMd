import styled from '@emotion/styled';

export const Textarea = styled.textarea`
  grid-area: 'editor';
  display: block;
  padding: 1.6rem 2rem;
  font-family: sans-serif;
  font-size: 1.8rem;
  line-height: 1.5;
  border: 0;
  box-shadow: 0 0 1px 1px #dadada;
  border-radius: 4px;
  transition: box-shadow 0.2s ease;
  resize: none;

  &:focus {
    box-shadow: 0 0 0 2px #46a1f4;
    outline: none;
  }
`;
