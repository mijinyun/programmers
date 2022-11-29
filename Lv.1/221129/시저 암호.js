function solution(s, n) {
    
    const alp = 'abcdefghijklmnopqrstuvwxyz';
    
    const arr = [...s].map((v) => {
        
        if ( v == ' ') {
            return ' ';
        } else {
            if (v == v.toUpperCase()) {
                return alp[(alp.toUpperCase().indexOf(v)+n)%26].toUpperCase();
            } else {
                return alp[(alp.indexOf(v)+n)%26];
            }   
        }
    })
    
    return arr.join('');
}