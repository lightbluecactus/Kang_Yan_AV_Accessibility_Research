(()=>{

	const	transcriptBtn = document.querySelector("#transcriptBtn"),
			transcript = document.querySelector("#transcript");

	let toggle = false;

	function toggleTranscript() {
		if(toggle){
			toggle = false;
			transcriptBtn.textContent = "Expand";
			transcript.style.display = "none";

		} else {
			toggle = true;
			transcriptBtn.textContent = "Hide";
			transcript.style.display = "block";
		}
	}

	transcriptBtn.addEventListener("click", toggleTranscript);



})();