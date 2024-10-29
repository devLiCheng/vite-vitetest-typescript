type s<T> = T extends string ? T : never

const srt:s<string> = '1'

type k = "x" extends 'x' ? string : number
const kv: k = "456"


type k2 = "x" | "y" extends 'x' ? string : number

const k2v: k2 = 123


type k3<T> = T extends "x" ?  string : number

const k3v: k3<"x" | "y"> = "456"
