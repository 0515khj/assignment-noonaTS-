/* 문제은행 11강- 제네릭 타입 */

/* 문제 1* */

// 매개변수, 리턴타입 정의 필요 
function getFirstElement<T>(array:T[]):T | undefined {
  // 여기에 구현
  return array[0]

}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

/* 문제 2* */

// 매개변수, 리턴타입 정의 필요 
function isNumberArray<T>(array:T[]):boolean {
  // 여기에 구현
  if(array.length === 0 )return true;
  return typeof array[0] === "number";
  
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)


/* 문제 3* */

// 조건부 타입 정의
type IsArray<T> = T extends any[] ? 'true':'false';

/* 문제 4* */

// Mapped Type 정의
type WithDefault<T> = {
  // 여기에 작성
  [K in keyof T]:[T[K], T[K]]
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }

    


/* 문제 5* */

// 매개변수, 리턴 타입 정의 필요 
function pluck<T,K extends keyof T>(array:T[], key:K):T[K][]  {
  // 여기에 구현
  return array.map(item => item[key])
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]

/* 문제 은행 12. 리터럴 타입 */

/* 문제 1* */

function getButtonClass(style:"primary" | "secondary" | "danger"): string {
  // 여기에 구현
  return `btn-${style}`
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생


/* 문제 2* */

function handleRequestState(state: "loading" |"success" |"error"): string {
  // 여기에 구현
  if(state === "loading"){
    return "Loading, please wait..."
  }else if(state === "success"){
    return "Request successful!"
  }else{
    return "There was an error processing your request."
  }
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown")); // 오류 발생


