
let queuedTimestamps = []

const apmLogger = logger => store => next => action => {
  queuedTimestamps.push(new Date)
  logger.log("Actions per minute: ", queuedTimestamps.length * 12)
  let result = next(action)
  queuedTimestamps = queuedTimestamps.filter( function(item) {
    return (new Date - item) <= 5000
  });
  return result
}

export default apmLogger

