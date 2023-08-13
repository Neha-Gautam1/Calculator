const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialChar=["%","*","/",".", "+","="];
let output="";

//Define function to calculate based on click button
const calculate=(btnValue)=>{
	if(btnValue==="=" && btnValue!==""){
		//If output has %,replce with /100 before evaluating
		output=eval(output.replace("%","/100"));
	}else if(btnValue==="cl"){
     output=" "
	}else if(btnValue==="del"){
     //remove last character
     output=output.toString().slice(0,-1);
	} else{
		//if outout is empty and button is last specialcharacter then returns
		if(output==="" && specialChar.includes(btnValue)) return;
		output+=btnValue;
	}
display.value=output;
}
//Add event listener to buttons, call calculate on click
buttons.forEach(button=>{
	//Button click listener calls calculate() with dataset value as argument
	button.addEventListener("click",e=>{
      calculate(e.target.dataset.value);
	});
})
