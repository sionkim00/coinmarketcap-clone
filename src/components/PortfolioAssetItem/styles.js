import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  ticker: {
    color: "grey",
    fontWeight: "600",
  },
  coinContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
  },
  coinImage: {
    height: 30,
    width: 30,
    marginRight: 5,
    borderRadius: 15,
  },
  quantityContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  currentPriceContainer: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
});

export default styles;
