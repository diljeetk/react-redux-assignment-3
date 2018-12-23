import React, { Component } from 'react';
import { preserveTime } from '../actions';
import { connect } from 'react-redux'

import "./styles.css";

class TimePillComp extends Component {
  constructor(props){
    super(props);
    this.onBttnClick = this.onBttnClick.bind(this);
  }
  onBttnClick() {
    this.props.preserveTime(this.props.time)
  }

  render() {
    return (
      <span className='time-pill-1'>
        <button onClick={this.onBttnClick} type="button" className={!this.props.selected ? 'btn bttn-style1' : ' btn btn-primary bttn-style1'}>
        <span className='timepill-space'>
        {
          this.props.selected
            ? <i className="fa fa-arrow-right" aria-hidden="true"></i>
            : <i className="fa fa-circle-o" aria-hidden="true"></i>
        }
        </span>{this.props.time}
        </button>
      </span>
    );
  }
}


const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
    preserveTime : tm => {
      dispatch(preserveTime(tm))
    }
  }
}

  const TimePill = connect(mapStateToProps,  mapDispatchToProps
)(TimePillComp)

export default TimePill;
