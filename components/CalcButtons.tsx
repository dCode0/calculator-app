import styled from "styled-components/native";
import React, { FC } from "react";

const CalcButton: FC<{
  title: string | number;
  onPress(): void;
  flex?: boolean;
  isControl?: boolean;
  isOperator?: boolean;
}> = ({ title, isControl, isOperator, flex, onPress }) => {
  const color = isControl ? "orange" : isOperator ? "orange" : "lightgrey";
  return (
    <StyledButton onPress={onPress} color={color} flex={flex}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButton>
  );
};

export default CalcButton;
const StyledButton = styled.TouchableOpacity<{ color: string; flex?: boolean }>`
  background-color: ${(props) => props.color};
  border-radius: 300px;
  width: 80px;
  height: 60px;
  padding: 5px;
  display: flex;
  justify-content: center;
  margin: 5px;
  flex-grow: ${(props) => (props.flex ? 1 : 0)};
  align-items: ${(props) => (props.flex ? "flex-start" : "center")};
  ${(props) => props.flex && "padding-left: 25px;"}
`;

const StyledButtonText = styled.Text`
  color: black;
  font-weight: 900;
  font-size: 33px;
`;


