import {actionTypes} from '../actions';

let initialState = {
    selectedDate : new Date(),
    selectedTime: '9:00',
    shiftDetails: [
        {
          name:'Morning',
          timeSlots:['9:00', '9:15', '9:30', '9:45', '10:00', '10:30', '11:00', '11:30'],
          icon:'fa fa-file-image-o',
          labeltxt:'9:00 AM to 12:00PM'
        },
        {
          name:'Afternoon',
          timeSlots:['13:00', '13:15', '13:30', '13:45', '14:00', '14:30', '15:00', '15:30'],
          icon:'fa fa-file-image-o',
          labeltxt:'12:00 PM to 5:00PM'
        },
        {
          name:'Evening',
          timeSlots:['19:00', '19:15', '20:00', '20:30', '20:45','21:00', '21:30', '21:45'],
          icon:'fa fa-file-image-o',
          labeltxt:'5:00 PM to 12:00AM'
        },
        {
          name:'Waiting list',
          timeSlots:[],
          icon:'fa fa-file-image-o',
          labeltxt:''
        }
    ]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.preserveDate : {
            return Object.assign({}, state, {selectedDate: action.selectedDate})
            break;
        }
        case actionTypes.preserveTime : {
            return Object.assign({}, state, {selectedTime: action.selectedTime})
            break;
        }
        default: return state     
    }
}
