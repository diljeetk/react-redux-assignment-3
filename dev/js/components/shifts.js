import React, { Component } from 'react';
import { preserveDate } from '../actions';
import { connect } from 'react-redux'
import TimePill from './TimePill';
import "./styles.css";

class ShiftComp extends Component {

  render() {
    return (
      <div className='shift-box'>
        <span className='box-hdr'>
          <i style={{'fontSize':'24px'}} className={this.props.icon + ' shift-heading-space'}   />
          <span className='heading-style'><b>{this.props.name}</b></span>
          <span className='label-txt'>{this.props.labeltxt}</span>  
        </span>

        <div>
          {
            this.props.time.map((slot) => {
              return <TimePill 
                time={slot}
                selected={slot == this.props.selectedTime}
              />
            })
          }
        </div>
<div>

</div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    selectedTime : state.activeUser.selectedTime,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    preserveDate: dt => {
      dispatch(preserveDate(dt))
    }
  }
}

  const Shift = connect(mapStateToProps,  mapDispatchToProps
)(ShiftComp)

export default Shift;
