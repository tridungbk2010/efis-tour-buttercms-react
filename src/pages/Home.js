import React from 'react';
import Cover from '../components/Cover';
import Comments from '../components/Comments';
import styled from 'styled-components';
import Tours from '../components/Tours';

const StyledContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
`;

export default function Home() {
  return (
    <div>
      <Cover />
      <StyledContainer>
        <Comments />
        <Tours />
      </StyledContainer>
    </div>
  );
}
