export const returnTypeNumber = (v: boolean) => {
  if(v)
    return 1
  else
    return 2
}

type a = ReturnType<typeof returnTypeNumber>

type QueryNumberType = () => a
export const queryNumber:  QueryNumberType = () => {
  const m = Math.random() * 100
  return m > 50 ? 1 : 2
}


