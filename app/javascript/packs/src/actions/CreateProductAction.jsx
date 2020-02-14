import axios from "axios";

const CreateProductAction = props => dispatch => {
  let { token, name, description, price, quantity, category,photo } = props;
  axios
    .post("/api/products", {
      token,
      product: { name, description, price, quantity, category,photo }
    })
    .then(response => {
      // console.log(response);
    })
    .catch(error => console.log(error.response.data));
};

export default CreateProductAction;
