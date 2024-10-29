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