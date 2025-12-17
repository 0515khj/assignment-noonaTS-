/* 문제은행 6강 교차타입 */

/* 문제 1* */

// Product 타입 정의
// 여기에 작성

type Product ={
  id:number,
  name:string,
  price:number
}

// Discount 타입 정의
// 여기에 작성

type Discount ={
  discountPercentage:number
}

function calculateDiscountedPrice(item:Product & Discount): number {
  // 여기에 구현
  return item.price - (item.price * item.discountPercentage / 100);
}

// 테스트 코드
const discountedProduct = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800


/* 문제 2* */

// ContactInfo 타입 정의
// 여기에 작성

type ContactInfo = {
  phone : string,
  address : string
}

// OrderInfo 타입 정의
// 여기에 작성

type OrderInfo = {
  orderId : number,
  items:string[]
}


function printOrderSummary(order:ContactInfo & OrderInfo ): string {
  // 여기에 구현
  return `Order ${order.orderId} (Phone : ${order.phone})`
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"]
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"



/* 문제 3* */

// 기본 사용자 정보 타입 정의
// 여기에 작성

type Profile = {
  id : number,
  name: string,
  email : string
}

// 사용자 활동 기록 타입 정의
// 여기에 작성

type Activity = {
  lastLogin: Date,
  actions: string[]
}

// 사용자 데이터를 병합하는 함수
function mergeUserData(profile: Profile ,activity: Activity): Profile & Activity {
  return {...profile , ...activity}
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user:Profile & Activity): string {
  // 여기에 구현
  return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인 : ${user.lastLogin}`
}

// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"


/* 문제은행 6강 교차타입 */


/* 문제 1* */

// 매개변수, 리턴타입 정의필요 
function processInput(input:number[] | string[] | {message:string})  {
  if('message' in input){
      return input.message.toUpperCase();
  }else if(typeof input[0] === "number"){
      return (input as number[]).reduce((a,b)=>a+b);
  }else{
    return (input as string[]).join(',');
  }
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42)); // 에러 발생

/* 문제 2* */

// 클래스 정의
// 여기에 작성

class Car {
  brand: string;

  constructor(brand:string){
    this.brand = brand;
   }
}

class Bike {
  type: string;
  
  constructor(type:string){
    this.type = type;
  }
}


function processVehicle(vehicle: Car | Bike): string {
  // 여기에 구현
  if(vehicle instanceof Car)return vehicle.brand.toUpperCase();
    return `Bike: ${vehicle.type}`;
  
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle("unknown")); // 에러 발생

/* 문제 3* */

type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  // 여기에 작성
  if("permissions" in user) return user.permissions.join(',');
  return user.email;
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// console.log(processUser({ type: "guest" })); // 에러 발생

/* 문제 4* */

type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  // 여기에 작성
  return (shape as Rectangle).width !== undefined;
}

function calculateArea(shape: Rectangle | Circle): number {
  // 여기에 작성
  if(isRectangle(shape)){
    return shape.width * shape.height;
  }else{
    return Math.PI * shape.radius * shape.radius;
  }
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

/* 문제 5* */

type Shape = { side: number } | { radius: number };

// 넓이를 계산하는 함수
function calculateArea1(shape: Shape): number {
  // 여기에 구현
  if('side' in shape){ 
    return shape.side * shape.side;
  }else if('radius' in shape){
    return Math.PI * shape.radius * shape.radius;
  }else{
    const exhaustivenessCheck:never = shape;
    throw new Error(`에러가 발생했습니다. ${exhaustivenessCheck}`)
  }
}

// 테스트 코드
console.log(calculateArea1({ side: 5 })); // 기대 출력: 25
console.log(calculateArea1({ radius: 7 })); // 기대 출력: 153.93804002589985



