let now = new Date().getTime()

const Time = (date) => {
	let t = Date.parse(date)
	var s = (now - t) / 1000
	let timeStr = ''
	if (s < 60) {
		timeStr = parseInt(s) + '秒前'
	}else if ((s/60) < 60) {
		timeStr = parseInt(s/60) + '分钟前'
	}else if ((s/60/60) < 24) {
		timeStr = parseInt(s/60/60) + '小时前'
	}else {
		timeStr = parseInt(s/60/60/24) + '天前'
	}
	return timeStr
}

export default Time