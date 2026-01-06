import googleOauth from "./googleSign.js";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const logIn = async () => {
  const token = await googleOauth();
  return fetch(`${API_URL}/logIn`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const anonRequest = async () => {
  return fetch(`${API_URL}/`, {
    method: "GET",
    headers: {
      Authorization: "anon",
    },
  });
};

export const getUserName = async () => {
  const token = await googleOauth();
  return fetch(`${API_URL}/getUserName`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });
};

export const getEventList = async () => {
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      return { data: data, message: "Fetched the data", success: true };
    } else {
      return { message: "Denied access", success: false };
    }
  } catch (error) {
    console.error(error.message);
    return { message: "Server did not respond", success: false };
  }
};
