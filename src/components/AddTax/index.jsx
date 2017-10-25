import React from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';


import {
  withRouter
} from 'react-router';

import validate from './../../config/validates/addtax';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid
} from 'redux-form';

import Input from '../Common/Form/Input';

import * as actions from './../../actions/app';


class AddTax extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.props);
    this.props.addTax(this.props.formValues.many);
  }

  render() {
    return (
      <div id="addTax">
        <h3>
          ここでは税込の計算を行います　現在の消費税は8%です
        </h3>
          <Field
            name="many"
            type="text"
            placeholder="税抜き金額"
            component={Input}
          />
          <button
            onClick={this.handleSubmit}
            disabled={(this.props.valid) === false}
          >
            計算
          </button>
          <br />
        <span className="price">税込：　{this.props.price}</span>
      </div>
    );
  }
}

AddTax = connect(
  state => ({
    formValues: getFormValues('addTax')(state),
    valid: isValid('addTax')(state)
  })
)(AddTax);

const mapStateToProps = state => {
  return {
    price: state.app.price
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'addTax',
    validate
})(AddTax)));
