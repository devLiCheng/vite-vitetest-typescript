type keys = "DOG" | "CAT"

type animals = {
  name: string
  age: number
}


type RecordRes = Record<keys, animals>

const cat: RecordRes['CAT'] = {
  name: '小花',
  age: 2
}

type Foo = {
  name: string
  method: string
}

type Ev = Omit<animals, 'name'>

const animalsAndfood : Ev = {
  age: 1,
}

type EvE = Extract<keyof animals, keyof Foo>

const eveval: EvE = 'name'


interface persionInfo{
  name: string
  age: number
  address: string
}

type ZS = Omit<persionInfo, 'address' | 'age'>

const zhagnsan: ZS = {
  name: 'zhangsan',
}

type CustomOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}


type ZS2 = CustomOmit<persionInfo, 'address' | 'age'>


const zhagnsan2: ZS2 = {
  name: 'zhangsan',
}


interface company{
  name: string
  address: string
  createYear: string
}

// type AppendToObject<T, K extends keyof any, V> = {
//   [P in keyof T | K]: P extends keyof T ? T[P] : V
// }

type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}

type c1 = AppendToObject<{ id: number; }, 'name', string>

const alibaba:c1 = {
  name: 'alibaba',
  id: 1,
}

type C2 = AppendToObject<company, 'ceo', string>

const jd: C2 = {
  address: "北京",
  name: "jd",
  ceo: "lqd",
  createYear: "1998"
}
