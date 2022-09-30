import { console } from "next/dist/compiled/@edge-runtime/primitives/console";

const link = "http://localhost:8080";

export const fetchInfo = async () => {
  try {
    const res = await fetch(`${link}/info`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchImages = async () => {
  try {
    const res = await fetch(`${link}/images`);
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const setInfo = async (data) => {
  try {
    const res = await fetch(`${link}/info`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const addNewImage = async (img) => {
  try {
    const res = await fetch(`${link}/images`, {
      method: "POST",
      body: JSON.stringify(img),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const deleteImage = async (id) => {
  try {
    const res = await fetch(`${link}/images/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAllImages = async (images) => {
  try {
    images.forEach((img) => {
      deleteImage(img.id);
    });
    return Promise.resolve();
  } catch (e) {
    console.log(e);
  }
};
