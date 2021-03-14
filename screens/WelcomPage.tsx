import React, { FC, useState } from "react";
import KeyPad, { Control, Operator } from "../components/KeyPad";
import ReactDOM from "react-dom";
import styled from "styled-components/native";
import { StyledView } from "../common/styles";
import { saveHistory, useAppDispatch } from "../store";
import dayjs from "dayjs";
import { Text, StyleSheet } from "react-native";
import { Button } from "antd-mobile";

const StyledNumberView = styled.View`
  justify-content: flex-end;
  flex-basis: 40%;
  width: 100%;
  align-items: flex-end;
`;

const StyledNumberText = styled.Text`
  text-align: right;
  color: white;
  font-size: 60px;
  padding: 0 15px;
`;

const StyledButton = styled.TouchableOpacity`
  color: white;
  font-size: 16px;
  padding: 10px;
  width: 100px;
  border-radius: 50px;
  align-items: center;
  margin: 10px 0;
  background-color: orange;
`;
const MAX_DIGIT = 10;

const styles = StyleSheet.create({
  baseText:{
    fontSize: 15,
    fontWeight: "bold",
  }, 
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
  }
});

const HomePage: FC = (props:any) => {
  
  return (
    <StyledView>
      <Text style={styles.titleText}>
        Welcome
      </Text>
      <StyledButton onPress={ () => props.navigation.navigate("Calculator") } >
        <Text style={styles.baseText}>
          Calculator
        </Text>
      </StyledButton>
      <StyledButton onPress={ () => props.navigation.navigate("Converter") }>
        <Text style={styles.baseText}>
          Converter
        </Text>
      </StyledButton>
      <StyledButton onPress={ () => props.navigation.navigate("History") }>
        <Text style={styles.baseText}>
          History
        </Text>
      </StyledButton>
    </StyledView>
  );
};

export default HomePage;
