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