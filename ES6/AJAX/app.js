


function loaddata(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            // console.log(this.responseText);
            document.getElementById("load").innerHTML = this.responseText;
            
        }
    }



    xhttp.open('GET',"readme.txt",true);
    xhttp.send();
}