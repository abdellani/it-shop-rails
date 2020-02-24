import axios from "axios";
import { ADD_FLASH } from "../types";

const CreateProductAction = props => dispatch => {
  let { token, name, description, price, category, photo } = props;
  axios
    .post("/api/products", {
      token,
      product: { name, description, price, category, photo }
    })
    .then(response => {
      let { status, message } = response.data;
      dispatch({
        type: ADD_FLASH,
        messageType: status,
        message: message
      });
    })
    .then(() => props.history.push("/"))
    .catch(error => console.log(error));
};

export default CreateProductAction;
