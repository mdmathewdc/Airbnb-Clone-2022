import React from "react";
import styled from "styled-components";
import { grey } from "../constants/ui/colors";
import { device } from "../constants/ui/breakpoints";

type Props = {};

type ReviewsData = {
  picture: string;
  star: number;
  description: string;
  name: string;
  location: string;
};
const Reviews = (props: Props) => {
  const reviewsData: ReviewsData[] = [
    {
      picture: "home1",
      star: 5,
      description: "It was great",
      name: "Downey",
      location: "Australia",
    },
    {
      picture: "home2",
      star: 4,
      description: "It was cool",
      name: "Evans",
      location: "Australia",
    },
    {
      picture: "home3",
      star: 5,
      description: "It was alright",
      name: "Hemsworth",
      location: "Australia",
    },
  ];

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
        {reviewsData.map((item, index) => (
          <div>
            <img
              className="house-image"
              src={`/src/images/reviews/${item.picture}.webp`}
            />
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </ReviewsContainer>
    </StyledReviews>
  );
};

export const StyledReviews = styled.div`
  padding-bottom: 56px;
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
  grid-column: span 12;

  .house-image {
    border-radius: 12px;
  }

  @media ${device.TABLET} {
    grid-column: span 4;
  }
`;

export default Reviews;
