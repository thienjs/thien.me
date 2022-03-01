export const timeFormatter = (count: number) => {
  const minutes = Math.floor(count / 60) // the lower rounded value of the division
  const seconds = count % 60 // the modulus calculates the remaining seoconds after all minutes (60 minutes) have been evenly divided

  const minutesDisplay =
    minutes < 10 ? '0' + minutes.toString() : minutes.toString()
  const secondsDisplay =
    seconds < 10 ? '0' + seconds.toString() : seconds.toString()

  return `${minutesDisplay}:${secondsDisplay}`
}
