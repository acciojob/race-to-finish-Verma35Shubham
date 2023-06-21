window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const prom1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		
		resolve("One")},(Math.floor(Math.random() * 5000)))
})

const prom2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("two")
	},(Math.floor(Math.random() * 5000)))
})

const prom3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("three")
	},(Math.floor(Math.random() * 5000)));
})

const prom4 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("four")
	},(Math.floor(Math.random() * 5000)))
})

const prom5 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("five")
	},(Math.floor(Math.random() * 5000)))
})

window.promises = [prom1, prom2, prom3, prom4, prom5 ];
Promise.any	(promises)
.then((value)=>{
	document.getElementById("output").innerText = value ;
})
.catch((err)=>{
	console.log("error");
})