let arr = [1, 5, 2, 1, 10];
let great = 0;
let less = 0;
let equal = 0;



$('#submit').on('click', event =>{
    event.preventDefault();
    let input = $('#number').val();
    arr.map( x => {
        if(x < input){
            less++;
        }else if (x > input){
            great ++
        }else{
            equal++
        }
    })
    console.log(great, less, equal)
})
