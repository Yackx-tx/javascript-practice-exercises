let str = 'Intelligent';
str = str.split('');
for(let i = 0; i < str.length; i++){
    if((i + 1) % 2 === 0){
        str[i] += 'Z';
    } else{
        str[i]
    }
}
console.log(str.join(''));
