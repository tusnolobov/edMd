import styled from '@emotion/styled';

export const PreviewContainer = styled.article`
  grid-area: 'preview';
  padding: 3rem 4.8rem;
  font-size: 1.8rem;
  font-family: sans-serif;
  line-height: 1.5;
  color: #152833;
  border-radius: 4px;
  box-shadow: 0 0 1px 1px #dadada;

  & > * :first-child {
    margin-top: 0;
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
