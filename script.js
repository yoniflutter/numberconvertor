var input = document.querySelector('input');
var output = document.querySelector('#output');

var ones = ['ዜሮ','አንድ', 'ሁለት', 'ሶስት', 'አራት', 'አምስት', 'ስድስት', 'ሰባት', 'ስምንት', 'ዘጠኝ', 'አስር'];
var tens = ['አስራ', 'ሃያ', 'ሰላሳ', 'አርባ', 'ሃምሳ', 'ስልሳ', 'ሰባ', 'ሰማንያ', 'ዘጠና'];
var hundreds = ['መቶ', 'አንድ ሺህ', 'ሁለት ሺህ', 'ሶስት ሺህ', 'አራት ሺህ', 'አምስት ሺህ', 'ስድስት ሺህ', 'ሰባት ሺህ', 'ስምንት ሺህ', 'ዘጠኝ ሺህ', 'አስር ሺህ'];

input.addEventListener('input', (e) =>{
    const number = parseInt(e.target.value);
    const result = convertNumber(number);
    if(number > 1000 || number < 0){
        output.innerText = "Please provide numbers less than or equal to 1000 and greater than or equal to 0"
    }else if(result == "" || result == undefined){
        output.innerText = "";
    }else{
        console.log(result);
        output.innerText = result;
    }
});

function convertNumber(number){
    if(number <= 10){
        if(number == 10){
            return ones[10];
        }
        return ones[number];
    }else if(number <= 100){
        var ten = Math.floor(number/10);
        var remainder = number % 10;
        if(number == 100){
            return hundreds[0];
        } else if(remainder == 0){
            return tens[ten - 1]; 
        }else{
            return `${tens[ten - 1]}  ${ones[remainder]}`;
        }
    }else if(number <= 1000){
        var hund = Math.floor(number/100);
        var remain = number % 100;
        if(number == 1000){
            return hundreds[1];
        }else if(remain == 0){
            return `${ones[hund]} ${hundreds[0]}`
        }else{
            return `${ hund == 1 ? hundreds[0] : ones[hund] + " " + hundreds[0] }` + " " + convertNumber(remain)
        }
    }
}