import styled from '@emotion/styled';

export const PreviewContainer = styled.article`
  grid-area: 'preview';
  padding: 0 4rem;
  font-size: 1.8rem;
  font-family: sans-serif;
  border-radius: 4px;
  background: #f2f2f2;
  overflow-x: hidden;
  overflow-y: auto;
  word-wrap: break-word;

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
