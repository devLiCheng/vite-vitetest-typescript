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