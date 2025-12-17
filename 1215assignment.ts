/* 문제은행 - 1강 원시타입 */
console.log('문제은행 - 1강 원시타입')

/* 문제 1. */
console.log('문제 1*');

let userName:string;
let userAge:number;
let isAdmin:boolean;

userName='Alice';
userAge=25;
isAdmin=true;

console.log(userName,userAge,isAdmin);

/* 문제 2. */
console.log('문제 2*');

let productName:string = "신라면";
let productPrice:number = 1000;
let isAvailable:boolean = true;

console.log(`상품명 : ${productName}, 가격 : ${productPrice}원, 재고 여부 : ${isAvailable}`)

/* 문제 3. */
console.log('문제 3*');

function addNumbers(a:number,b:number):number {
    return a + b
}
console.log(addNumbers(5,3));

/* 문제 4. */
console.log('문제 4*');

function stringifyValue(value:string|null|undefined){

    if(value === null || value === undefined){
        return "값이 없습니다."
    }
    return value;
}

console.log(stringifyValue('hello'));
console.log(stringifyValue(null));
console.log(stringifyValue(undefined));

/* 문제 5. */
console.log('문제 5*');

function compareValues(a: unknown, b:unknown):string {

    if(a === b){
        return "엄격한 동등성";
    }else if(a == b){
        return "느슨한 동등성";
    }else {
        return "동등하지 않음";
    }
}

console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성 (둘이 값이없다란것 만 같음 다만 의미가 다름)
console.log(compareValues(false, 0)); //  느슨한 동등성 (false == 0 > true)
console.log(compareValues(NaN, NaN)); // 동등하지 않음 (NaN == or === Nan > false)
console.log(compareValues(42, 42)); // 엄격한 동등성


/* 문제 6. */
console.log('문제 6*');

function isPrimitive(value: unknown): boolean {
    return Object(value) !== value;
}

console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false

/* 문제은행 2강 - 객체 & 배열 & 튜플 타입 */
console.log('문제은행 2강 - 객체 & 배열 & 튜플 타입')

/* 문제 1 */
console.log('문제 1*');
let user:{name:string,age?:number,isAdmin:boolean} = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40,
  isAdmin: false
}

console.log(user)

/* 문제 2 */
console.log('문제 2*');
let noona:{readonly numbers:number } = {numbers : 5};

console.log(noona)
// numbers.push(4);
// numbers[0] = 42;

/* 문제 3 */
console.log('문제 3*');

const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(
  products: [string, number, boolean][]
) {
  return products.map(pro => [pro[0],pro[1]])
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(
  products: [string, number, boolean][]
){
  return products.filter(pro=> pro[2] !== false)
}

console.log(getProductNamesAndPrices(products));
console.log(getAvailableProducts(products));



/* 문제 4 */
console.log('문제 4*');

//매개변수, 리턴 타입 정의 필요
function updateUser(user:{name:string, age?:number}){
  // 나이가 제공되지 않으면 18로 설정
    // if(user.age ===undefined){ 둘다 가능
    if(!user.age){
        user.age = 18
    }
  return user;
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }


/* 문제 5 */
console.log('문제 5*');

// proudcts 타입정의  필요 
const product:{name:string,price:number,category?:string}[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 }
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category:string) {
  return product.filter(cate => cate.category === category).map(cate => cate.name);
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
