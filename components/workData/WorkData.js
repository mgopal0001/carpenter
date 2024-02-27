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
          <Text
            style={styles.heading}
          >{`Customer Name: ${order?.customerName}`}</Text>
          <Text style={styles.subHeading}>{`Address: ${order?.address}`}</Text>
          <Text
            style={styles.subHeading}
          >{`Mobile Number: ${order?.phone}`}</Text>
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
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 18,
    marginBottom: 10,
    marginTop: 10,
    borderColor: "#FF074F",
    borderWidth: 3,
  },
  heading: {
    fontSize: 18,
    textTransform: "capitalize",
  },
  subHeading: {
    fontSize: 16,
    color: "gray",
  },
});
