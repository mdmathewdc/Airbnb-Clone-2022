import React, { FunctionComponent, SVGProps } from "react";
import styled from "styled-components";
import { ReactComponent as messaging } from "../images/svg/messaging.svg";
import { ReactComponent as home } from "../images/svg/home.svg";
import { ReactComponent as emptystar } from "../images/svg/emptystar.svg";
import { lightGrey } from "../constants/ui/colors";

type Props = {};

const Features = (props: Props) => {
  interface FeatureData {
    name: string;
    description: string;
    icon: string;
  }

  const renderIcon = (iconName: string) => {
    const svgIcons: any = {
      messaging,
      home,
      emptystar,
    };
    const IconComponent = svgIcons[iconName];
    return <IconComponent />;
  };

  const featuresData: FeatureData[] = [
    {
      name: "24/7 customer support",
      description:
        "Day or night, we’re here for you. Talk to our support team from anywhere in the world, any hour of day.",
      icon: "messaging",
    },
    {
      name: "Global hosting requirements",
      description:
        "All hosts must meet hosting requirements and maintain a minimum rating to be on Airbnb.",
      icon: "home",
    },
    {
      name: "All-star hosts",
      description:
        "From fresh-pressed sheets to tips on where to get the best brunch, our Hosts are full of local hospitality.",
      icon: "emptystar",
    },
  ];
  return (
    <StyledFeatures>
      {featuresData.map((feature, index) => (
        <div className="feature-tile">
          <div>{renderIcon(feature.icon)}</div>
          <div>{feature.name}</div>
          <div>{feature.description}</div>
        </div>
      ))}
    </StyledFeatures>
  );
};

export const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-top: 1px solid ${lightGrey};
  border-bottom: 1px solid ${lightGrey};

  .feature-tile {
    // display: flex;
    // flex-direction: column;
    grid-column: span 4;
  }
`;
export default Features;
