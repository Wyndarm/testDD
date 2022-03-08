const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',];

const monthes = [
'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' 
]

// function getDayInfo(date) {
	
	// date = date.split(".").map(i => +i);
	// let t = new Date(date[2],--date[1],date[0]);
	// let Y = t.getFullYear();
	// let M = monthes[t.getMonth()];
	// let D = t.getDate();		
	// let d = days[t.getDay()];		
	// let day = Math.ceil(D / 7);	
	// return `${d}, ${day} неделя ${M} ${Y} года`;
	
// }

// console.log(getDayInfo('08.03.2022'));

function getDayInfo(date) {
	
	date = date.split(".").map(i => +i);
	let t = new Date(date[2],--date[1],date[0]);	
	let Y = t.getFullYear();
	let M = monthes[t.getMonth()];
	let D = t.getDate();		
	let d = days[t.getDay()];		
	let weekNum = Math.ceil(D / 7);	
	return `${d}, ${weekNum} неделя ${M} ${Y} года`;
	
}

console.log(getDayInfo('08.03.2022'));
 











































