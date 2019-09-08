import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/app-context';

const StyledTour = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
  }

  margin: 10px 0;
  .text-tour {
    text-align: left;
    padding: 15px;
    .tour-name {
      display: block;
      font-size: 18px;
      line-height: 18px;
      font-weight: 700;
      min-height: 44px;
    }
    .book-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const StyledImg = styled.div`
  background-image: url(${p => p.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 240px;
  overflow: hidden;
  color: #fff;
`;

function Tour(props) {
  const { bookTour } = useApp();

  const selectTour = React.useCallback(() => {
    bookTour(props);
  }, [bookTour, props]);

  return (
    <StyledTour>
      <Link to={`/tour/${props.name}`}>
        <StyledImg src={props.url} />
      </Link>
      <div className="text-tour">
        <span className="tour-name">
          <Link to={`/tour/${props.name}`}>{props.name}</Link>
        </span>
        <div className="book-btn">
          <Button onClick={selectTour} type="default">
            Book
          </Button>
        </div>
      </div>
    </StyledTour>
  );
}

export default Tour;
