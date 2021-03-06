import React from "react";
import styled from "styled-components";
import { device } from "../constants/ui/breakpoints";
import HostHorizontal from "../images/real/host-horizontal.jpg";
import HostVertical from "../images/real/host-vertical.jpg";
import { Button } from "../components/ui";
import { black } from "../constants/ui/colors";

type Props = {};

const TryHosting = (props: Props) => {
  return (
    <StyledTryHosting>
      <TextContent>
        <p className="heading">Try hosting</p>
        <p className="subtitle">
          Earn up to $4,679 AUD/month by sharing your space in Sydney.
        </p>
        <div className="button-wrapper">
          <Button
            bgColor="#fff"
            text="Learn more"
            textColor={black}
            padding={"8px 16px"}
            fontSize={"14px"}
          ></Button>
        </div>
      </TextContent>

      <picture>
        <source media={device.TABLET} srcSet={HostHorizontal} />
        <img src={HostVertical} />
      </picture>
    </StyledTryHosting>
  );
};

export const StyledTryHosting = styled.div`
  position: relative;
  padding-bottom: 56px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;

    @media ${device.TABLET} {
      height: 360px;
    }

    @media ${device.LAPTOP} {
      height: 400px;
    }
    @media ${device.DESKTOP} {
      height: 480px;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  color: white;
  padding: 32px 32px 0 32px;
  text-align: center;

  .heading {
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 8px;
    line-height: 36px;

    @media ${device.LAPTOP} {
      font-size: 48px;
      line-height: 50px;
    }
  }

  .subtitle {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;

    @media ${device.LAPTOP} {
      margin-bottom: 24px;
      font-size: 18px;
      line-height: 24px;
    }

    @media ${device.DESKTOP} {
      margin-bottom: 40px;
    }
  }

  @media ${device.TABLET} {
    width: 360px;
    text-align: left;
    padding 0 40px;
    top: 30%;
  }

  @media ${device.LAPTOP} {
    width: 500px;
  }
`;

export default TryHosting;
