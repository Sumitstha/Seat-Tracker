
 let total=0;

        let addfunc=()=>{
            let a=document.getElementById("inputbox1");
            let input=a.value.trim();

            if(input==="" || isNaN(input)){
                alert("Please enter a valid number.");
                a.value="";
                return false;
            }

            let i= parseInt(input);

            let newTotal= total+i;
            if(newTotal>50){
                alert("No more than 50");
            }else{
                total=newTotal;
                document.getElementById("output").textContent=total;
                document.getElementById("in").textContent=50-total;
            }

            a.value="";
            return false;
        };

        let subfunc=()=>{
            let a=document.getElementById("inputbox2");
            let input=a.value.trim();

            if(input==="" || isNaN(input)){
                alert("Please enter a valid number.");
                a.value="";
                return false;
            }

            let i=parseInt(input);

            let newTotal=total-i;
            if(newTotal < 0){
                alert("Total cannot be negative.");
            }else{
                total=newTotal;
                document.getElementById("output").textContent=total;
                document.getElementById("in").textContent=50-total;
            }

            a.value="";
            return false;
        };