let inputs = document.querySelectorAll("#innerForm input");
let submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", function(){
// })

submitBtn.onclick = (e) => {
    // parameter

    inputs.forEach((x) => {
        // console.log(x.value);
        if (x.value == "") {
            x.style.border = "1px solid red";
            e.preventDefault();
        }else{
            x.style.border = "1px solid lightgray";
        }
        
        if (x.type == "number") {
            if (x.value.length == 10) {
                x.style.border = "1px solid lightgray";
            }else{
                e.preventDefault();
                x.style.border = "1px solid red";
            }
        }


    })

}

