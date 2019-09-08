import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import coverImg from '../../images/cover.png';
import { useApp } from '../../context/app-context';

const StyledCover = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.6)
    ),
    url(${p => p.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-bottom: 135px;
  padding-top: 220px;
  min-height: 700px;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  > div {
    text-align: center;
  }
`;

const StyedH2 = styled.h1`
  color: #fff;
  font-size: 3.4rem;
  line-height: 3.4rem;
  text-align: center;
  font-weight: 600;
  width: 600px;
`;

const StyedP = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
`;

function Cover() {
  const { bookTour } = useApp();
  return (
    <StyledCover src={coverImg}>
      <StyledInfo>
        <div>
          <StyedH2>Supplying free services for foreign visitors</StyedH2>
          <StyedP>
            Hanoi Free Private Tour Guide provides (according to the request of
            the tourists, unlimited in styles)
          </StyedP>
          <Button type="primary" size="large" onClick={bookTour}>
            Book Free Tour
          </Button>
        </div>
      </StyledInfo>
    </StyledCover>
  );
}

export default Cover;
