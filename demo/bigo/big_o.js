const ex1 = (arr)=>{
    let sum =0;
    let product = 1;
    for(let i=0; i<arr.length;i++){
        sum+= arr[i];
    }
    for(let i=0; i<arr.length;i++){
        product *= arr[i];
    }
    console.log(sum+ " , " + product)
}

const ex2 = (arr) =>{
    for(let i=0; i< arr.length; i++){
        for(let j=0; j< arr.length; j++){
            console.log(arr[i] + " , " + arr[j])
        }
    }
}


const ex3 = (arr) =>{
    for(let i=0; i< arr.length; i++){
        for(let j=i +1; j< arr.length; j++){
            console.log(arr[i] + " , " + arr[j])
        }
    }
}

const ex4 = (arr1, arr2)=>{
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j< arr2.length; j++){
            console.log(arr1[i] + " , " + arr2[j])
        }
    }    
}

const ex5 = (arr1, arr2)=>{
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j< arr2.length; j++){
            for(let k=0; k< 1000000; k++){
                console.log(arr1[i] + " , " + arr2[j])
            }
        }
    }    
}

