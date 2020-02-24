import React from "react";
import { connect } from "react-redux";
import FetchUserDetailsAction from "../actions/Users/FetchUserDetailsAction";
import UserDetails from "../components/UserDetails";
import ProductCard from "../components/ProductCard";

class UserPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchUserDetailsAction({ id });
  }
  render() {
    let { userDetails } = this.props;
    let { products } = userDetails;
    return (
      <div className="w-100">
        <h3>User details:</h3>
        <div className="my-3 w-100">
          <UserDetails {...userDetails} />
        </div>
        <h3>List of products</h3>
        <div className="row my-3 w-100">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 mr-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { userDetails } = state;
  return { userDetails };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUserDetailsAction: ({ id }) => dispatch(FetchUserDetailsAction({ id }))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
