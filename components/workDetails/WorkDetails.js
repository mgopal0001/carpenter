import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { _getItemByOrderId } from "../../network/item";
import { _updateOrder } from "../../network/order";

export default function WorkDetails({ route }) {
  const { order } = route.params;
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (order) {
      _getItemByOrderId(order.orderId)
        .then((res) => {
          console.log({ res });
          setItems(res.data);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [order]);

  const STATUS_VALUES = [
    {
      key: "IN_PROGRESS",
      value: "In Progress",
    },
    {
      key: "PENDING",
      value: "Pending",
    },
    {
      key: "COMPLETED",
      value: "Completed",
    },
    {
      key: "CANCELED",
      value: "Canceled",
    },
  ];

  const handleUnitChange = (input) => {
    console.log({ input });
    const payload = {
      status: input,
    };
    _updateOrder(payload, order.orderId)
      .then((res) => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardItem}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.previewImage}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={styles.itemDetails}>
          <Text style={{ fontSize: 20, color: "#E30F4D" }}>
            {item?.itemName}
          </Text>
          {item.properties.map((property) => (
            <View
              key={property.key}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 15, color: "#535353" }}>
                {property?.key}:
              </Text>
              <Text style={{ fontSize: 15, color: "#535353" }}>
                {property?.value}
              </Text>
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
        {/* <Text style={styles.badge}>{order.status}</Text> */}
        <View style={styles.selectContainer}>
          <Picker
            selectedValue={order.status}
            onValueChange={(input) => handleUnitChange(input)}
            style={styles.picker}
          >
            {STATUS_VALUES.map((status) => (
              <Picker.Item
                key={status.key}
                label={status.value}
                value={status.key}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles.orderDetails}>
        <Text
          style={{
            textAlign: "left",
            textTransform: "capitalize",
            fontSize: 20,
          }}
        >
          {`Customer Name: ${order.customerName}`}
        </Text>
        <Text
          style={{ textAlign: "left" }}
        >{`Mobile Number: ${order.phone}`}</Text>
        <Text style={{ textAlign: "left" }}>{`Address: ${order.address}`}</Text>
        <Text
          style={{ textAlign: "left" }}
        >{`Visit Time: ${order.visitTime}`}</Text>
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
  },
  orderDetails: {
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginTop: 10,
    borderColor: "#FF074F",
    borderWidth: 3,
  },
  addWorkButton: {
    backgroundColor: "#E30F4D",
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    width: "50%",
    height: "100%",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  itemDetails: {
    width: "50%",
    padding: 20,
  },
  cardItem: {
    marginTop: 10,
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between", // Add this line
    flexDirection: "row",
    height: 200,
    gap: 20,
    borderColor: "#FF074F",
    borderWidth: 3,
  },
  picker: {
    height: 40,
    width: 300,
    color: "white",
    fontWeight: "bold",
  },
  selectContainer: {
    borderRadius: 5,
    backgroundColor: "#FF074F",
    alignItems: "center",
    justifyContent: "center",
  },
});
