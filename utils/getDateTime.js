export function getDateTime() {
  const today_date = new Date();

  const day = today_date.getDate();
  const month = today_date.getMonth() + 1;
  const año = today_date.getFullYear();

  const hours = today_date.getHours();
  const minutes = today_date.getMinutes();
  const seconds = today_date.getSeconds();

  const date_time = año + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

  return date_time;
}
