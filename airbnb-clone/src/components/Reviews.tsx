import React from "react";
import styled from "styled-components";
import { black, grey, darkGrey } from "../constants/ui/colors";
import { device } from "../constants/ui/breakpoints";
import { ReactComponent as Star } from "../images/svg/color-star.svg";

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
      description:
        "“I absolutely loved our stay at this property. Located in a quiet street a short walk to restaurants and cafes in North Hobart, it was even better than the pictures”",
      name: "Johansson",
      location: "Australia",
    },
    {
      picture: "home2",
      star: 5,
      description:
        "“A fantastic apartment with a wonderful host!  The apartment was warm and cosy (despite the 2-degree cold outside), with plenty of space for two, and beautifully decorated throughout.”",
      name: "Do",
      location: "Australia",
    },
    {
      picture: "home3",
      star: 4,
      description:
        "“We really appreciated you making it so easy for our late arrival. We really enjoyed the balcony and the cafe next door - delicious. Thank you also for the wine - we will be back!”",
      name: "He",
      location: "Australia",
    },
  ];

  const renderStars = (stars: number) => {
    return [...Array(stars)].map((e, i) => <StyledStar />);
  };

  const getImageUrl = (name: string) => {
    return new URL(`/src/images/reviews/${name}.jpeg`, import.meta.url).href;
  };

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
          <div className="review-wrapper">
            <img className="house-image" src={getImageUrl(item.picture)} />
            <div className="star-wrapper">{renderStars(item.star)}</div>
            <p className="description">{item.description}</p>
            <div className="host-wrapper">
              <img className="customer-image" src={getImageUrl(item.name)} />
              <div>
                <p className="name">{item.name}</p>
                <p className="location">{item.location}</p>
              </div>
            </div>
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

export const StyledStar = styled(Star)`
  margin-left: 4px;
  height: 16px;
  width: 16px;
`;

export const TextContainer = styled.div`
  margin-bottom: 20px;
  grid-column: span 12;

  @media ${device.TABLET} {
    h2 {
      font-size: 26px;
      line-height: 30px;
    }
  }
`;

export const ReviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;

  .star-wrapper {
    margin: 12px 0;
    display: flex;
  }

  .review-wrapper {
    grid-column: span 12;
  }

  .house-image {
    width: 100%;
    border-radius: 12px;
  }

  .description {
    color: ${darkGrey};
    line-height: 20px;
    margin-top: 6px;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .name {
    color: ${black};
    line-height: 20px;
    font-size: 16px;
    font-weight: 800;
    padding-left: 12px;
    margin-top: 0;
  }

  .location {
    font-size: 14px;
    line-height: 18px;
    padding-left: 12px;
    margin-top: 0;
  }

  .host-wrapper {
    display: flex;
    align-items: center;
  }

  .customer-image {
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }

  @media ${device.TABLET} {
    .review-wrapper {
      grid-column: span 4;
    }
  }
`;

export default Reviews;
