import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { _getOrders } from "../../network/order";

export default function WorkData({ navigation, orderType }) {
  const [orders, setOrders] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const renderItem = ({ item: order }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { order })}
      >
        <View style={styles.card}>
          <Text style={styles.userName}>{order?.customerName}</Text>
          <Text style={styles.userAddress}>{order?.address}</Text>
          <Text style={styles.userPhone}>{order?.phone}</Text>
          <Text style={styles.userStatus}>{order?.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    _getOrders(pageNumber, pageSize, orderType)
      .then((res) => {
        setOrders(res.data.data.orders);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [orderType]);

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(order) => order.orderId} // Use a unique key for each item
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    height: 150, // Adjust the height based on your design
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 18,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "rgba(247, 230, 116, 0.74)",
  },
  userName: {
    fontSize: 18,
    textTransform: "capitalize",
  },
  userAddress: {
    fontSize: 16,
    color: "gray",
  },
  userPhone: {
    fontSize: 16,
    color: "gray",
  },
  userStatus: {
    fontSize: 16,
    color: "gray",
  },
});
