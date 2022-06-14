import React from "react";
import styled from "styled-components";
import { grey } from "../constants/ui/colors";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <StyledReviews>
      <TextContainer>
        <h2>What guests are saying about homes in Australia</h2>
        <p>
          Over <strong>10,000,000 guest reviews</strong> with an average of
          <strong> 4.8 out of 5 stars</strong>
        </p>
      </TextContainer>
      <ReviewsContainer>
        <p> REVIEW HERE </p>
      </ReviewsContainer>
    </StyledReviews>
  );
};

export const StyledReviews = styled.div`
  h2 {
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
  }

  p {
    color: ${grey};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 8px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 20px;
`;

export const ReviewsContainer = styled.div`

`;

export default Reviews;
