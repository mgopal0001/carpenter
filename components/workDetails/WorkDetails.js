import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { _getItemByOrderId } from "../../network/item";

export default function WorkDetails({ route }) {
  const { order } = route.params;
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (order) {
      _getItemByOrderId(order.orderId)
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [order]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardItem}>
        <View>
          <Image
            source={{ uri: item.image }}
            style={styles.previewImage}
          ></Image>
        </View>
        <View style={styles.itemDetails}>
          <Text style={{ fontSize: 20, color: "red" }}>{item?.itemName}</Text>
          {item.properties.map((property) => (
            <View style={{ display: "flex", justifyContent: "space-between" }}>
              <Text style={styles.userName}>{property?.key}:</Text>
              <Text style={styles.userName}>{property?.value}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    // <ScrollView horizontal={false}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            textAlign: "left",
            textTransform: "capitalize",
            fontSize: 20,
          }}
        >
          {`Order Details: `}
        </Text>
        <Text style={styles.badge}>{order.status}</Text>
      </View>
      <View style={styles.orderDetails}>
        <Text
          style={{
            textAlign: "left",
            textTransform: "capitalize",
            fontSize: 30,
          }}
        >
          {order.customerName}
        </Text>
        <Text style={{ textAlign: "left" }}>{order.phone}</Text>
        <Text style={{ textAlign: "left" }}>{order.address}</Text>
        <Text style={{ textAlign: "left" }}>{order.visitTime}</Text>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.itemId} // Use a unique key for each item
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Add Work", { orderId: order.orderId });
        }}
      >
        <View style={styles.addWorkButton}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Add New Work
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 10,
  },
  badge: {
    backgroundColor: "red",
    borderRadius: 50,
    textAlign: "right",
    textTransform: "capitalize",
    padding: 15,
    fontSize: 10,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px slolid red",
  },
  orderDetails: {
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  addWorkButton: {
    backgroundColor: "#E30F4D",
    padding: 10,
    borderRadius: 10,
  },
  previewImage: {
    width: "50%",
    height: "60%",
  },
  itemDetails: {
    width: "50%",
  },
  cardItem: {
    borderColor: "red",
    backgroundColor: "gray",
    borderRadius: 20,
    height: "100%",
    padding: 20,
  },
});
