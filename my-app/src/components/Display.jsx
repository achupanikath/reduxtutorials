import React, { Component } from 'react';
import { connect } from 'react-redux';
import simple from '../actions/simpleAction';
import Button from '@material-ui/core/Button';
import store from '../store.js';

class Display extends Component {

  constructor(props){
    super(props);
    this.styles = theme => ({
      button: {
        margin: theme.spacing.unit
      },
      input: {
        display: 'None',
      },
    });
  }

  componentWillMount() {
    if(this.props.add)
      console.log("True");
  }

  onclick = () => {
    
    store.subscribe(() => {
      console.log("Tester", store.getState());
    });
    console.log("Onclick action",  this.props.dispatch(simple));

    // // let stateProps = this.props.store.getState();
    // console.log("Test rootReducer", ans);
  }

  render() {
    console.log("My state is", this.props)
    return (
      <div style={this.styles.root}>
        <h1>Hello</h1>
          <Button variant="outlined" color="primary" className={this.styles.button} onClick = {this.onclick}>
             Primary
          </Button>
          <h2> {}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myState: state,
  value: state.add});
  
export default connect(mapStateToProps) (Display);
