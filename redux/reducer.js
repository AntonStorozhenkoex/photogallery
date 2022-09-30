import {
  ADD_IMAGE,
  FETCH_INFO,
  FETCH_IMAGES,
  DELETE_IMAGE,
  DELETE_ALL_IMAGES,
  SELECT_IMAGE,
  OPEN_DIALOG,
  CLOSE_DIALOG, SET_LOADING,
} from "./types";

const initialState = {
  photos: [],
  title: "",
  description: "",
  selectedImage: {},
  isOpenDialog: false,
  isLoading: true
};

export const photoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return { ...state, photos: action.payload, isLoading: false};
    case FETCH_INFO:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        isLoading: false
      };
    case ADD_IMAGE:
      return { ...state, isLoading: false };
    case DELETE_IMAGE:
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
      };
    case DELETE_ALL_IMAGES:
      return { ...state, photos: [],isLoading: false };
    case SELECT_IMAGE:
      return { ...state, selectedImage: action.payload };
    case OPEN_DIALOG:
      return { ...state, isOpenDialog: true };
    case CLOSE_DIALOG:
      return { ...state, isOpenDialog: false };
    case SET_LOADING:
      return  {...state,isLoading: true}
    default:
      return state;
  }
};
