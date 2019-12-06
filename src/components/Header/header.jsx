import React, { useContext } from 'react';

import { store } from '../../state/store';
import { togglePreview } from '../../state/features/preview/actions';

import { Button } from './header.styles';

import { Logo, HeaderContainer } from './header.styles';

export const Header = () => {
  const { state, dispatch } = useContext(store);

  const handleClick = () => {
    dispatch(togglePreview());
  };

  return (
    <HeaderContainer>
      <Logo>edMd</Logo>
      <Button onClick={handleClick} preview={state.preview}>
        Preview
      </Button>
    </HeaderContainer>
  );
};
