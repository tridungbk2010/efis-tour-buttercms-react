import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .quotation {
    .tour-joined {
      text-align: left;
      padding-top: 5px;
      font-size: 13px;
    }
    text-align: justify;
    font-style: italic;
    font-size: 14px;
  }
  .table-avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .comment-avatar {
      overflow: hidden;
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }
    .comment-name {
      margin-left: 10px;
      .tourist-name {
        font-size: 16px;
        font-weight: 700;
        text-align: left;
      }
      .comment-country {
        text-align: left;
        font-size: 13px;
        font-weight: 300;
        color: $GRAY;
        text-transform: uppercase;
      }
    }
  }
`;

const StyledImg = styled.div`
  background-image: url(${p => p.src});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function Comment({ quotation, urlAvatar, name, country, date, tour }) {
  return (
    <StyledWrapper>
      <div className="table-avatar">
        <div className="comment-avatar">
          <StyledImg src={urlAvatar} />
        </div>
        <div className="comment-name">
          <div className="tourist-name">{name}</div>
          <div className="comment-country">{country}</div>
        </div>
      </div>
      <div className="quotation">
        <p className="tour-joined">
          <a href="#123">{tour}</a>- {date}
        </p>
        {quotation}
      </div>
    </StyledWrapper>
  );
}

export default Comment;
