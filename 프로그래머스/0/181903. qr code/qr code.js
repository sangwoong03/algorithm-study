// function solution(q, r, code) {
//     let answer = '';
//     for (const idx in code) {
//         if (idx % q === r) answer += code[idx]
//     }
//     return answer;
// }

const solution = (q, r, code) => {
    return [...code].filter((_elem, index) => index % q === r).join('')
}