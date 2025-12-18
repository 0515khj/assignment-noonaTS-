/* 문제은행 3강 - type, interface */

/* 문제 1* */

// 인터페이스 작성
interface users {
  id:number;
  name:string;
  email?:string
}
// 타입 작성
type userWith ={
  id:number,
  name:string,
  email?:string
}

const user:users = {
  id: 1,
  name: "Alice",
};

const userWithEmail:userWith = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

console.log(user);
console.log(userWithEmail);

/* 문제 2* */

// User 타입을 작성하세요.
// 여기에 작성

interface User {
  id:number;
  name:string;
  address:{
    city:string;
    zipCode:number;
  }
}

// User 타입을 사용하여 아래 객체를 작성하세요.
const user1:User = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};
console.log(user1);


/* 문제 3* */

// User 인터페이스 작성
// 여기에 작성
interface User2 {
  id:number;
  name:string;
  email?:string;
}

// Admin 인터페이스 작성 (User 확장)
// 여기에 작성

interface Admin extends User2 {
  role:string
}

const normalUser:User2 = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser:Admin  = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

console.log(normalUser);
console.log(adminUser);


/* 문제 4* */

// Product 타입 작성
// 여기에 작성
type Product ={
  id:number,
  name:string,
  price:number
}


// DiscountedProduct 타입 작성 (Product 확장)
// 여기에 작성
type discountProduct = Product & {discount:number};

const normalProduct:Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct:discountProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

console.log(normalProduct);
console.log(discountedProduct);



/* 문제 5* */

// Product 타입 작성
// 여기에 작성

  type Product2 = {
    id:number,
    name:string,
    price:number
  }

// Order 타입 작성
// 여기에 작성
type Order=  {
  orderId:number,
  products:Product2[],
  totalPrice:number
}

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order:Order = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

console.log(order);


/* 문제 6* */

// BaseUser 인터페이스 작성
// 여기에 작성
interface Baseuser {
  id:number;
  name:string
}

// AdminUser 타입 작성
// 여기에 작성
type AdminUser = Baseuser & {
  role:string
}

// GuestUser 타입 작성
// 여기에 작성
type GuestUser = Baseuser & {
  visitCount : number;
}

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};

console.log(admin);
console.log(guest);


/* 문제은행 4강 - 고급타입 */

/* 문제 1* */

// 작업 상태를 나타내는 enum을 작성하세요.
// 여기에 작성

enum TaskStatus {
  Pending ,
  InProgress ,
  Completed
}

function getStatusMessage(status:TaskStatus):string {
  if(status === TaskStatus.Pending){
    return "작업이 대기 중입니다."
  }else if(status === TaskStatus.InProgress){
    return "작업이 진행 중입니다."
  }else{
    return "작업이 완료되었습니다."
  }
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."



/* 문제 2* */

// 작업 상태를 나타내는 enum 작성
// 여기에 작성
  enum TaskStatus2 {
    Pending ,
    InProgress,
    Completed,
    Failed,

  }

 function processTask(status:TaskStatus2, input: unknown): string {


   if(typeof input !== 'string'){
     throw new Error ('입력값은 문자열어여야 합니다.')
   }

   if(status === TaskStatus2.Pending){
     return input.toUpperCase();
   }else if(status === TaskStatus2.InProgress){
     return input.toLowerCase();
   }else if(status === TaskStatus2.Completed){
     return "완료" + input;
  }else{
     throw new Error ("작업이 실패했씁니다.")
   }
 }

// 테스트 코드
 console.log(processTask(TaskStatus2.Pending, "task1")); 

 console.log(processTask(TaskStatus2.InProgress, "TaskA")); 

 console.log(processTask(TaskStatus2.Completed, "Report1")); 

 console.log(processTask(TaskStatus2.Failed, "TaskX")); 
// 에러: 작업이 실패했습니다.

 console.log(processTask(TaskStatus2.Pending, 42)); 
// 에러: 입력값은 문자열이어야 합니다.

/* 문제 3* */

// 로그 수준을 나타내는 enum 작성
// 여기에 작성

enum log {
  Info,
  Error,
  Debug
}

// 로그 함수 타입을 정의하세요.
// 여기에 작성

type logType ={
  message:string;
  level:log
}


// 로그 함수 구현
const logMessage= (message:string, level:log) => {
  if(level === log.Info){
    console.log(`[INFO]${message}`)
  }else if(level === log.Error){
    console.log(`[Error]${message}`)
  }else{
    console.log(`[Debug]${message}`)
  }
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.",log.Info);
logMessage("네트워크 연결 실패!", log.Error);
logMessage("디버깅 모드 활성화", log.Debug);



/* 문제 4* */

function processAny(input: any): string {
  return String(input)
}

function processUnknown(input: unknown): string | number {
  if(typeof input === "string"){
    return input.toUpperCase();
  }else if(typeof input === "number"){
    return input * 10;
  }else{
    throw new Error('에러 발생~')
  }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생

