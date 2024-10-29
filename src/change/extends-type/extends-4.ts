type res1 = true extends boolean ? true : false                  // true
type res2 = 'name' extends 'name'|'age' ? true : false           // true

type res3 = [1, 2, 3] extends { length: number; } ? true : false // true
type res4 = [1, 2, 3] extends Array<number> ? true : false       // true


const r1: res1 = true
const r2: res2 = true


type A1 = 'x' extends 'x' ? true: false
const a1val = true

type A2 = P<'x' | 'y'> extends 'x' ? string : number; //  type A1 = number
const a2value: A2 = 123

type AT<T> = T extends 'x' ? string : number

const at1: AT<'x' | 'y'> = 'str'
const at2: AT<'x' | 'y'> = 132
