// function fun1() {
//     document.getElementById("but").innerHTML="clear URL";
//      document.getElementById("but").setAttribute("type","submit");
// }
function fun() {
		
	
	const e = document.getElementById("imgs").value;
//    var e='';
    // document.getElementById("p").innerHTML=e;
	// if ($('input:text').val().length == 0){
	// 	document.getElementById("i").innerText="Empty url "
	// }
   Tesseract.recognize(e)
         .then(function(result) {
            document.getElementById("i")
                    .innerText = result.text;
         });
	var i1=document.getElementById("plss").style.display="block";
    // document.getElementById("but").style.display="none";
//    a.innerHTML="code complete succfully ... ";
//    var par=document.getElementById("p");
//    par.appendChild(a);
    //  fun1();
    window.location.href = "#i";

   }