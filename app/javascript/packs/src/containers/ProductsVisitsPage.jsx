import React, { Fragment } from "react";
import { connect } from "react-redux";
import FetchProductVisits from "../actions/Visits/FetchProductVisitsAction";
import WorldMap from "../components/WorldMap";
import VisitsPanel from "../components/VisitsPanel"
class ProductsVisitsPage extends React.Component {
  componentDidMount() {
    let { product_id } = this.props.match.params;
    let {token} = this.props
    this.props.fetchProductVisits({ product_id,token });
  }
  render() {
    let { visits } = this.props;
    return (
      <div className="d-flex flex-column w-100 align-items-center">
        <VisitsPanel visits={visits}/>
        <WorldMap visits={visits} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { token, visits } = state;
  return {
    token,
    visits
  };
};

const mapDispatchToProps = dispach => {
  return {
    fetchProductVisits: ({ token, product_id }) =>
      dispach(FetchProductVisits({ token, product_id }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsVisitsPage);
