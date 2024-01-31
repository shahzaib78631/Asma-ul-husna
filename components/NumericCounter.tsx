import * as React from "react";
import Svg, { Path, Text } from "react-native-svg";
const NumericCounter = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="transparent"
    stroke={props.color || "#000"}
    strokeWidth={0.005}
    viewBox="-25.6 -25.6 563.2 563.2"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="m256 22.017-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z"
    />
    <Path d="m256 22.017-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z" />
    <Text
      x={250}
      y={320}
      fontSize={150}
      fontFamily="English"
      fontWeight="bold"
      textAnchor="middle"
      fill={props.color || "#000"}
    >
      {props.count}
    </Text>
  </Svg>
);
export default NumericCounter;
