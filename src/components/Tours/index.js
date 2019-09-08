import React from 'react';
import styled from 'styled-components';
import { DATA_TOUR } from '../../const';
import Tour from './Tour';

const StyledContainer = styled.div`
  padding-bottom: 60px;
  margin: 0 auto;

  .fl-team-member-title {
    text-align: center;
    padding-top: 30px;
    font-size: 24px;
    font-weight: 300;
  }
  @media (max-width: 767px) {
    .fl-team-member {
      max-width: 90vw;
      .fl-team-member-data {
        column-count: 1;
        column-gap: 20px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .fl-team-member {
      max-width: 90vw;
      .fl-team-member-data {
        column-count: 2;
        column-gap: 20px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .fl-team-member {
      max-width: 80vw;
      .fl-team-member-data {
        column-count: 3;
        column-gap: 20px;
      }
    }
    .bodyContent {
      width: 960px;
      margin: 0 auto;
    }
  }
  @media (min-width: 1200px) {
    .fl-team-member {
      max-width: 85vw;
      .fl-team-member-data {
        column-count: 3;
        column-gap: 25px;
      }
    }
    .bodyContent {
      width: 960px;
      margin: 0 auto;
    }
  }
`;

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

function Tours() {
  return (
    <StyledContainer>
      <div className="fl-team-member">
        <h4 className="fl-team-member-title">TOURS</h4>
        <StyledList>
          {DATA_TOUR.map((tour, index) => (
            <Tour key={index} {...tour} />
          ))}
        </StyledList>
      </div>
    </StyledContainer>
  );
}

export default Tours;
