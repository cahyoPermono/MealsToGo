import React from "react";
import { Text } from "react-native";

export const RestaturantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = "https://images.pexels.com/photos/5865304/pexels-photo-5865304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address = "100 some street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
