import axios from "axios";
import { _getToken } from "./auth";
import { BASE_URL } from "./configs";

export const _saveOrderItem = async (payload, orderId) => {
  const token = await _getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  const orderForm = new FormData();

  orderForm.append("itemName", payload.itemName);

  orderForm.append("properties", JSON.stringify(payload.properties));

  let localUri = payload.photo;
  let filename = localUri.split("/").pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  orderForm.append("image", {
    uri: localUri,
    name: filename,
    type,
  });

  try {
    console.log("final payload", JSON.stringify(orderForm, null, 4));
    const response = await axios.post(
      `${BASE_URL}/item/add-item/${orderId}`,
      orderForm,
      { headers: headers }
    );

    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const _getItemByOrderId = async (orderId) => {
  const token = await _getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(`${BASE_URL}/item/get-items/${orderId}`, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};
