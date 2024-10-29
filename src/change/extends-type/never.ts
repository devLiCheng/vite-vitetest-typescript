  // never是所有类型的子类型

  type A = never extends string ? true : false
  
  type P<T = never> = T extends string ? string : T extends never ? boolean : Function

  const pv: P<string> = '2153'

  type P2 = P<never>
  let pv2: P2 


  // never 类型的用法和特性


  // 1.表示永远不会发生的值：

  function throwError(message: string): never {
    throw new Error(message)
  }

  throwError("error")


  type N = never extends string ? true : false; // A 是 false



type Ne<T> = [T] extends ['x'] ? true : false

// const nev:Ne<never> = true
// const nev2:Ne<number> = false

// console.log('nev nev2', nev, nev2)

interface EP {
  a: string
  age: number
  address: string
}

type EP2 = Partial<EP>

const e: EP2 = {
  a: '1',
  age: 2
}


type EP3 = Exclude<keyof EP, 'age'>

const e3: EP3 = 'address'
const e31: EP3 = 'a'

type EP4 = Exclude<EP , 'age'>

const e4: EP4 = {
  address: '1',
  a: '2',
  age: 3
}


type E6 = Exclude<'key1' | 'key2', 'key2'> // 'key1'


const EV: E6 = 'key1'


interface school{
  c: string
  people: number,
  address: string,
  remark: string
}

type E7 = Omit<school, 'people' | 'c' >

const e7v: E7 = {
  address: '1',
  remark: '2'
}


type E8 = Pick<school, Exclude<keyof school, 'people' | 'c'>>
const e8v: E8 = {
  address: "1",
  remark:'2'
}

type E9 = Exclude<keyof school, 'people'>
const e9v: E9 = 'address'

type E10 = Pick<school, E9>
const e10v: E10 = {
  address: '1',
  c:'13',
  remark: '2'
}

type E11 = Omit<school, Exclude<keyof school, 'people'>>

