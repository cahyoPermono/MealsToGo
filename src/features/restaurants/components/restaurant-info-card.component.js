import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestauranCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestauranCardCover = styled(Card.Cover)`
  background-color: white;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaturantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/5865304/pexels-photo-5865304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    address = "100 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestauranCard elevation={5}>
      <RestauranCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestauranCard>
  );
};
