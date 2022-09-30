const link = "http://localhost:3006";
import axios from "axios";

  class PhotoGalleryApi {
  getInstance = () => {
    const instance = axios.create({
      baseURL: link,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return instance;
  };

  fetchInfo = async () => {
    const response = await this.getInstance()
        .get("/info")
        .then((res) => res.data);
    return response;
  };

  fetchImages = async () => {
    const response = await this.getInstance()
        .get("/images")
        .then((res) => res.data);
    return response;
  };

  setInfo = async (data) => {
    const response = await this.getInstance()
        .put("/info", data)
        .then((res) => res.data);
    return response;
  };

    addNewImage = async (data) => {
    const response = await this.getInstance()
        .post("/images", data)
        .then((res) => res.data);
    return response;
  };

    deleteImage = async (id) => {
    const response = await this.getInstance()
        .delete(`/images/${id}`)
        .then((res) => res);
    return response;
  };

    deleteAllImages = (data) => {
    data.forEach((img) => {
      this.getInstance().delete(`/images/${img.id}`);
    });
    return Promise.resolve();
  };
}

export default new PhotoGalleryApi();