import axios from "axios";
import { _getToken } from "./auth";
import { BASE_URL } from "./configs";

export const _getOrders = async (pageNumber, pageSize, order) => {
  const token = await _getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/order/get-order?pageNumber=${pageNumber}&pageSize=${pageSize}&status=${order}`,
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const _saveOrder = async (payload) => {
  const token = await _getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(
      `${BASE_URL}/order/add-order`, payload,
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log({ error });
  }
};

export const _updateOrder = async (payload, orderId) => {
  const token = await _getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.patch(
      `${BASE_URL}/order/update-order/${orderId}`, payload,
      { headers: headers }
    );
    return response;
  } catch (error) {
    console.log({ error });
  }
};

