function displayDateTime() {
			const now = new Date();
			const date = now.toDateString();
			const time = now.toLocaleTimeString();
			document.getElementById("timer").innerHTML = date + " " + time;
		}

		setInterval(displayDateTime, 1000);