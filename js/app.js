/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/

document.getElementById("name1").innerHTML = "Tay-Tay"

/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/

document.getElementById("position2").innerHTML = "Project Manager"
document.getElementById("position2").style.backgroundColor = "red"


/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/
document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40px";

/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/
document.getElementsByClassName("profile")[0].innerHTML = "Little red Corvette Baby you're much to fast, yes you are Little red Corvette "
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif"

/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/
document.getElementsByClassName("profile")[1].innerHTML = "As you think, so shall you become."



/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/
document.getElementsByClassName("alias")[2].innerHTML = "Mace Windu"




/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
var divElement = document.createElement('div');
divElement.id = 'name7';
divElement.innerHTML = "Peter Griffin"
nameParent.appendChild(divElement);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var divElement2 = document.createElement('div');
divElement2.id = "alias8";
divElement2.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(divElement2);

//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/

var MyProfile = document.getElementsByClassName("block3 col-sm-4")[2];

//profile picture
var image = document.getElementsByTagName("img");
image[8].src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg"


//My name
var Profile_DIV = document.createElement('div');
Profile_DIV.style.textAlign = "center";
Profile_DIV.id = "My_name";
Profile_DIV.innerHTML = "Jeraldy Cascayan"

MyProfile.appendChild(Profile_DIV);

//What School I Go To
var WhoIAm = document.createElement("div");
WhoIAm.id = "School_Name";
WhoIAm.innerHTML = "Waipahu High School Student"
WhoIAm.style.textAlign = "center";
MyProfile.appendChild(WhoIAm);

//What Class I'm In
var ClassName = document.createElement("div");
ClassName.id = "Class_Name";
ClassName.innerHTML = "Coding 1 @ J9"
ClassName.style.textAlign = "center";
MyProfile.appendChild(ClassName);

//My Quote
var MyQuote = document.createElement("div");
MyQuote.id = "My_Quote";
MyQuote.innerHTML = '"Coding is hard"'
MyQuote.style.textAlign = "center";
MyProfile.appendChild(MyQuote);