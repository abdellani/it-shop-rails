import axios from "axios";

const FetchMyProductsAction = ({ token }) => dispatch => {
  console.log(token);
  axios
    .get(`/api/loggedin/products`, { params: { token } })
    .then(respose => console.log(respose))
    .catch(error => console.log(error));
};

export default FetchMyProductsAction;
