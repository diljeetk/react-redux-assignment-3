import React, { Component } from 'react';
import { preserveDate } from '../actions';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import  $ from 'jquery';
import {Home} from './home';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import ShiftComp from './shifts';
import './styles.css'


class AppComp extends Component {
  constructor(props){
    super(props)
    this.state ={
        dateSelected:new Date()
    }
  }
   
  selectDate(dt) {
    this.setState({ dateSelected: dt })
   this.props.preserveDate(dt)
  }
  
  render() {
    return (
      <div className='main-style container-fluid'>
        <div className='col=sm-12 col-md-2 col-lg-2 cal-style'>
        <DatePicker
    inline
    selected={this.state.dateSelected}
    onChange={(dt) => this.selectDate(dt)}
/>
</div>
<div className='col=sm-12 col-md-10 col-lg-10 set-part2'>
  {
    this.props.shiftDetails.map((obj) => {
      return <ShiftComp
        name={obj.name}
        time={obj.timeSlots}
        icon={obj.icon}
        labeltxt={obj.labeltxt}
      />
    })
  }
</div>
<div className='view-bttn-dt'>
<button type="button" onClick={() => alert(this.props.selectedDate + ' ' + this.props.selectedTime)} className={'btn btn-primary bttn-style2'}> View Date Time</button>
</div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    selectedDate : state.activeUser.selectedDate,
    shiftDetails: state.activeUser.shiftDetails,
    selectedTime: state.activeUser.selectedTime
  }
}
const mapDispatchToProps = dispatch => {
  return {
    preserveDate: dt => {
      dispatch(preserveDate(dt))
    }
  }
}

  const App = connect(mapStateToProps,  mapDispatchToProps
)(AppComp)

export default App;
