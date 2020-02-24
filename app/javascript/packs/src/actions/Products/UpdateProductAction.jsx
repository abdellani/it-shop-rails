import axios from "axios"

const UpdateProductAction =  props => dispatch => {
  let { token, product_id,name, description, price, category, photo } = props;
  axios
    .put(`/api/loggedin/products/${product_id}`, {
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

export default UpdateProductAction;
