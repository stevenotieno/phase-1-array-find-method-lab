// code your solution here
var superbowlWin = superbowlWinRecord => {
	let superbowlWon = superbowlWinRecord.find( superbowl => {  return superbowl.result === "W" })
	if (superbowlWon){ 
		return superbowlWon.year
	} else {
		return undefined
	}
}
Footer
