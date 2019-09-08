import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Carousel from 'nuka-carousel';
import { DATA_COMMENTS } from '../../const';
import Comment from './Comment';

const StyledComments = styled.div`
  .comment-headline-h4 {
    text-align: center;
    padding-top: 30px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
  }
  .comment-list {
    margin-top: 20px;
    .slider-control-centerright {
      right: -60px !important;
    }
    .slider-control-centerleft {
      left: -60px !important;
    }
  }
`;

function Comments() {
  return (
    <StyledComments>
      <h4 className="comment-headline-h4">Recently Comments</h4>
      <div className="comment-list">
        <Carousel
          slideIndex={0}
          slidesToShow={2}
          cellSpacing={20}
          cellAlign="left"
          slideWidth={0.8}
          renderCenterRightControls={() => (
            <Button shape="circle" icon="right" />
          )}
          renderCenterLeftControls={() => <Button shape="circle" icon="left" />}
        >
          {DATA_COMMENTS.map((data, index) => (
            <Comment
              key={index}
              name={data.name}
              quotation={data.quotation}
              country={data.country}
              date={data.date}
              tour={data.tour}
              urlAvatar={data.urlAvatar}
            />
          ))}
        </Carousel>
      </div>
    </StyledComments>
  );
}

export default Comments;
