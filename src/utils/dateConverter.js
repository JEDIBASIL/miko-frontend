


const dateConverter = (unixTimestamp) => {

const milliseconds = unixTimestamp * 1000

const dateObject = new Date(milliseconds)

const humanDateFormat = dateObject.toLocaleString().split(",")[0]
  return humanDateFormat;
}

export default dateConverter