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

  /* Scrollbar */
  overscroll-behavior: contain;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    height: 0.3rem;
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:vertical {
    min-height: 1rem;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    min-width: 1rem;
  }
`;
