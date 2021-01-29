import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, HeaderContainer, Controls } from './Block.styles';

export const Block = ({ children, header }) => (
  <Container>
    <HeaderContainer>
      <Header>{header}</Header>
    </HeaderContainer>
    <Controls>{children}</Controls>
  </Container>
);

Block.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string,
};
