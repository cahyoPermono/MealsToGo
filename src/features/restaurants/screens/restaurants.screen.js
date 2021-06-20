import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaturantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: 5px;
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaturantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
