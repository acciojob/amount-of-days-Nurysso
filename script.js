//your JS code here. If required.
function daysOfAYear(year) {
	const isLeap = (year%4===0 && year %100!=0) || year %400===0;
	return isLeap ? 366: 365;
}