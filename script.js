function output(){
    return document.getElementById('inputText');
}

let calculate =(number)=>{
    let result = output();
    result.value += number;
}

let clr =()=>{
    let result = output();
    result.value = " ";
}

let del =()=>{
    let result = output();
    result.value = result.value.slice(0, -1);
}

function ans(){
    let result = output();
    try{
        result.value = eval(result.value);
    }
    catch(err){
        result.value = 'undefined';
    }
}