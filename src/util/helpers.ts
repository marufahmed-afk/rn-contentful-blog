import moment from 'moment';

export const formatDate = (date: string) => {
  console.log('date helper', date);
  const dateObj = new Date(date);
  return moment(dateObj).format('dddd, MMMM Do YYYY');
};
