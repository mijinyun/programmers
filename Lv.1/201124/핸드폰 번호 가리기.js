function solution(phone_number) {
    const last = phone_number.slice(-4,);
    const first =phone_number.slice(0,-4);
    
    const firstStr = [...first].map(v => v = "*").join('');
    
    return firstStr + last
}