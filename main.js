const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = new RegExp('the','gi')
console.log(str.match(regexp)) 
// 배열데이터로 출력된다. 
// g라는 옵션을 통해 모든 the가 배열로 출력된다. (대소문자 구분)
// i를 적게되면 대문자 소문자를 구분하지 않겠다는 말이다.
// 생성자 방식으로 생성

const regexp1 = /the/gi
console.log(str.match(regexp1)) //리터럴 방식으로 생성

const regexp2 = /fox/gi
console.log(regexp2.test(str)) // true

const regexp = /heropy/gi
console.log(regexp3.test(str)) //false

const regexp4 = /fox/gi
console.log(str.replace(regexp, 'AAA'))
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown AAA jumps over the lazy dog.
// abbcccdddd
console.log(str)
console.log(str.replace(regexp, 'AAA'))
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd

//str자체를 변경하고 싶을 때

let str1 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://lacalhost::1234
`

const regexp5 = /fox/gi
str = str.replace(regexp, 'AAA')
console.log(str)
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown AAA jumps over the lazy dog.
// abbcccdddd


const regexp6 = /the/
console.log(str.match(regexp6))

const regexp7 = /the/g
console.log(str.match(regexp7)) // 배열로 the가 두개

const regexp8 = /the/gi
console.log(str.match(regexp8)) // the, the, The 세개 전부 출력

console.log(str.match(/./gi)) // 하나의 명령으로 동작하기 때문에 문자로 해석되기 위해 \.으로 작성되어야 한다.
console.log(str.match(/\./gi)) //마침표를 검색하겠다. // 이스케이프 문자 ( 백슬래시 ) 기호를 통해 본래의 기능에서 벗어나 상태가 바귀는 문자

console.log(str.match(/\.$/gi)) //문장이 끝나는 부분 마침표가 있는지 없는지 위에서는 `기호 바로 앞에. //false
console.log(str.match(/\.$/gim)) // 전체줄마다 끝나는 부분에 마침표가 있는지 없는지 확인 

console.log(
  str.match(/d$/g) // 한줄의 끝이 알파벳 d라면 찾아진다. //null이 출력 //줄바꿈이 무시되기 때문에 `의 앞이 해당되므로 null이나온다.
)
console.log(
  str.match(/d$/gm) //이렇게 되면 abbccddd가 출력이된다.
)
console.log(
  str.match(/^t/gm) // 't' 하나만 출력이 된다. i를 넣어야먄 T까지 나오게된다.
)

console.log(
  str.match(/h..p/g) //http가 출력된다. h(어떠한글자)(어떠한글자)p
)
console.log(
  str.match(/fox|dog/g) //fox와 dog가 동시에 찾아진다.
)
console.log(
  str.match(/fox|dog/) //g가 없다면 먼저 찾아지는 fox가 출력된다.
)
console.log(
  strmatch(/https?/g) // https 와 http 모두 검색이된다.
)
console.log(
  str.match(/d{2}/) // d가 두번반복되는 구간 출력 dd, dd 이렇게 두개가 출력된다. 맨 마지막 줄에 dddd이므로 2개씩해서
)

console.log(
  str.match(/d{2,}/g) // d가 2 이상 반복되는 구간 출력 dddd 출력
)

console.log(
  str.match(/\w{2,3}/g) //숫자를 포함한 영어 알파벳을 의미. 두번이상 세번이하 반복되는 것을 출력
)

console.log(
  str.match(/\b\w{2,3}\b/g) // 숫자나 알파벳이 아닌 특스문자가 앞이나 뒤에 있는 경우 010 com www com The fox the dog
)

console.log(
  str.match(/[fox]/g) //f와 o와 x가 모두 출력이된다.
)

console.log(
  str.match(/.{1,}(?=@)/g) // thesecon출력
)

console.log(
  str.match(/(?<=@).{1,}/g) // gmail.com출력
)