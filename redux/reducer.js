import {
  ADD_IMAGE,
  FETCH_INFO,
  FETCH_IMAGES,
  DELETE_IMAGE,
  DELETE_ALL_IMAGES,
  SELECT_IMAGE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from "./types";

const initialState = {
  photos: [],
  title: "",
  description: "",
  selectedImage: {},
  isOpenDialog: false,
};

export const photoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return { ...state, photos: action.payload };
    case FETCH_INFO:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
      };
    case ADD_IMAGE:
      return { ...state, photos: action.payload };
    case DELETE_IMAGE:
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
      };
    case DELETE_ALL_IMAGES:
      return { ...state, photos: [] };
    case SELECT_IMAGE:
      return { ...state, selectedImage: action.payload };
    case OPEN_DIALOG:
      return { ...state, isOpenDialog: true };
    case CLOSE_DIALOG:
      return { ...state, isOpenDialog: false };
    default:
      return state;
  }
};
