document.getElementById("form").addEventListener("submit", function(){
	//prevents page refreshing
	event.preventDefault();
	showInput();
})

document.getElementById("show").addEventListener("click", function(){
	//prevents page refreshing
	event.preventDefault();
	randomJoke();
})
//allows user to submit text by return key
document.getElementById("user_input").addEventListener("keypress", function(){
	if(event.which === 13&& !event.shiftKey){
        //prevents page refreshing
        event.preventDefault(); 
        showInput();
    }
	
})

//contains random jokes called by button 
var arr = [
"A man walks into a bar, ouch",
"Why did the chicken cross the road? To get to the other side",
"A priest, a rabbi and an imam walk into a bar. The bartender says, “What is this, some kind of joke?”",
"A guy walks into a bar owned by Eminem He tells the bartender,Give me 2 shots of…The bartender cuts him off saying,”You only get 1 shot.",
"A ghost walks into a bar, the bartender says, Sorry, we don’t serve spirits.",
];

function randomJoke() {
	//selects random joke from arr
	var x = Math.floor(Math.random() * 5);
	var str = arr[x];
	//Replaces key words in random joke
	var rep = 
	str.replace("man walks into a bar, ouch", "colleague leaves their camera on by accident after a zoom call, ouch.").
	replace(/barman/g, "moderator").
	replace (/bartender/g, "moderator").
	replace (/Bartender/g, "Moderator").
	replace (/Barman/g, "Moderator").
	replace(/walk into /g, "join ").
	replace(/walks into /g, "joins ").
	replace(/to get to the other side/g, "to maintain social distancing").
	replace(/To get to the other side/g, "To maintain social distancing").
	replace(/bar/g, "zoom call ").
	replace(/saloon/g, "zoom call ").
	replace(/pub/g, "zoom call ").
	replace(/order/g, "deliveroo").
	replace(/walks into /g, "joins ").
	replace(/at the bar/g, "on the zoom call")
	//displays random joke
        document.getElementById('display').innerHTML = str     
        document.getElementById('edit').innerHTML = rep;
}

//very similar to above, couldnt work out how to refactor due to the .replaces.
function showInput() {
		var str = document.getElementById("user_input").value; 
		var rep = 
		str.replace("man walks into a bar, ouch", "colleague leaves their camera on by accident after a zoom call, ouch.").
		replace(/barman/g, "moderator").
		replace (/bartender/g, "moderator").
		replace (/Bartender/g, "Moderator").
		replace (/Barman/g, "Moderator").
		replace(/walk into /g, "join ").
		replace(/walks into /g, "joins ").
		replace(/to get to the other side/g, "to maintain social distancing").
		replace(/To get to the other side/g, "To maintain social distancing").
		replace(/bar/g, "zoom call ").
		replace(/saloon/g, "zoom call ").
		replace(/pub/g, "zoom call ").
		replace(/order/g, "deliveroo").
		replace(/walks into /g, "joins ").
		replace(/at the bar/g, "on the zoom call")
        document.getElementById('display').innerHTML = 
                   document.getElementById("user_input").value;
         document.getElementById('edit').innerHTML = rep;
}
