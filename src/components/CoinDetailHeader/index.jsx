import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from "../../Contexts/WatchlistContext";

export default function CoinDetailHeader({
  coinId,
  image,
  market_cap_rank,
  symbol,
}) {
  const navigation = useNavigation();
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();

  const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((watchlistCoinId) => watchlistCoinId === coinId);

  const handleWatchlistCoin = () => {
    console.log("clicked");
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 24, height: 24 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      {/* <EvilIcons name="user" size={30} color="white" /> */}
      <FontAwesome
        name={checkIfCoinIsWatchlisted() ? "user" : "star"}
        size={25}
        color={checkIfCoinIsWatchlisted() ? "white" : "#FFBF00"}
        onPress={handleWatchlistCoin}
      />
    </View>
  );
}
