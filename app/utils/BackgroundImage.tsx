"use client";

import styled from "styled-components";

interface BackgroundImageProps {
  imageUrl: string;
  height?: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  background-image: url(${(props) => props.imageUrl});
  height: ${(props) => props.height || "300px"};
  background-size: cover;
  width: w-auto;
  background-position: center;
  background-repeat: no-repeat;
`;
