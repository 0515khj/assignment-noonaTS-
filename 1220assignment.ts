/* 문제은행 15. 타입 활용하기 */

/* 문제 1* */

type ExtractReturnType<F> = F extends (...args:any[])=> infer R ? R:never ;

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // 기대 결과: string
type Test2 = ExtractReturnType<(x: number) => boolean>; // 기대 결과: boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // 기대 결과: { id: number }



/* 문제 2* */

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key] as T[K]
}

// 테스트 코드
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"



/* 문제 3* */

type RequestData<T> = 
    T extends "text" ? string :
    T extends "json" ? Record<string, any> :
    T extends "binary" ? Uint8Array :
    never;

function processRequest<T extends "text" | "json" | "binary">(type: T, data: RequestData<T>
): string {
  // 여기에 구현
    return `Processed : ${data}`
}

// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: [object Object]"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
