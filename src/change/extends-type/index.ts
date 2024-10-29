interface User {
  name: string
  age: number
}

interface lisi{
  name: string
}

// 如果extends前面的类型能够赋值给extends后面的类型，那么表达式判断为真，否则为假。

type userHave = lisi extends User ? true : false

type userHave2 = User extends  lisi ? true : false

const h : userHave = false
const w: userHave2 = true

const arr: Array<number> = [1,2,3]

type Arrtype = typeof arr;

const arrT: Arrtype = [54]

type Arrtype2 = typeof arr[number]

const arrT2: Arrtype2 = 542

interface IObJ {
  [k : string]: any
}
const obj : IObJ= {
  name: 123,
  age:123,
  "address": "132"
}

type OBjType = keyof IObJ

const Object_LZ: OBjType = "name"

type fnType = () => boolean
const random : fnType = () => {
  return Math.random() > 0.5 ? true : false
}

const r = random()
const fn = () => {
  return random()
}

interface IUser {
  name: string
  age: number
  address: string
}

interface IUser2<T> {
  name: T
}

interface IUser3 extends IUser2<string> {
  age: number
}

type E = IUser3 extends IUser ? number : string
type D = IUser extends IUser2<string> ? boolean : Function

const EN : E = "456"
const DS: D = true
