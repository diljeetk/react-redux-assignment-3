
export const actionTypes = {
    preserveDate : 'DATE_PRESERVE',
    preserveTime : 'TIME_PRESERVE'
}

export const  preserveDate = dt => {
    return preserveDateObj(dt)
}

const preserveDateObj = selectedDate =>{
    return {
        type : actionTypes.preserveDate,
        selectedDate,
    }
}

export const preserveTime = tm => {
    return preserveTimeObj(tm)
}

const preserveTimeObj = selectedTime => {
    return {
        type: actionTypes.preserveTime,
        selectedTime
    }
}
