
const input = document.getElementById("inputBox");

document.querySelector(".calculator").addEventListener("click", function(e) 
{
    if (e.target.classList.contains("operator")) {
        if (e.target.innerHTML === "AC")
         {
            input.value = "0"; 
        } 
        else if (e.target.innerHTML === "DEL") {
            input.value = input.value.slice(0, -1);
            if (input.value === "") 
            {
                input.value = "0"; 
            }
        } 
        else if (e.target.innerHTML === "%") 
        {
            input.value = parseFloat(input.value) / 100;
        } 
        else 
        {
            input.value += e.target.innerHTML;
        }
    } 
    else if (e.target.innerHTML === "=")
     {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = "Error"; 
        }
    }
     else {
        if (input.value === "0" || input.value === "Error") 
        {
            input.value = e.target.innerHTML; 
        } 
        else {
            input.value += e.target.innerHTML; 
        }
    }
});
