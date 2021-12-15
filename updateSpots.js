/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function (state, appointments, id) {
  const daysOfWeek = {Monday:0, Tuesday:1, Wednesday:2, Thursday:3, Friday:4};
  const dayIndex = daysOfWeek[state.day];
  
  const days = state.days.map(day => {return {...day}});

  // console.log('___appointments[id]', appointments[id]);
  // console.log('___state.appointments[id]', state.appointments[id]);
  const prevState = state.appointments[id].interview;
  const newState = appointments[id].interview;

  if (!prevState && newState) { // create
    days[dayIndex].spots--;
  }
  if (prevState && !newState) { // delete
    days[dayIndex].spots++;
  }

  // return days array
  return days;
};

module.exports = updateSpots;


