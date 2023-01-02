let datas = ['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   '];

let result ='';

for (var data of datas) {
    data = data.replace(/ /g,'').replace(/\+/g,'1').replace(/-/g,'0');
    text += String.fromCharCode(parseInt(data,2));
}

console.log(result);