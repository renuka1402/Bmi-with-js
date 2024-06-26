function calculatebmi(){
    let age=parseInt(document.getElementById('age').value);
    let height=parseInt(document.getElementById('height').value);
    let weight=parseInt(document.getElementById('weight').value);
   
    let bmi= (weight/((height*height)/10000)).toFixed(2);


    if(age>=18){
        if(bmi<18){
            document.getElementById('normal').innerHTML="";
            document.getElementById('overweight').innerHTML="";
            document.getElementById('underweight').style.opacity ='1';
            

        }
        else if(bmi>=18 && bmi<=24){
            document.getElementById('underweight').innerHTML="";
            document.getElementById('overweight').innerHTML="";
            document.getElementById('normal').style.opacity='1';
           

        }
        else {
            document.getElementById('underweight').innerHTML="";
            document.getElementById('normal').innerHTML="";
            document.getElementById('overweight').style.opacity='1';
           
        }
    }
    else{
        alert("under age")
    }
}
