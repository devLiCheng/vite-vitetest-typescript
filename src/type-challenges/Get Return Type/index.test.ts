import {test, expect} from 'vitest'
import {returnTypeNumber, queryNumber} from './index'

test('传入true： 返回1， 传入false: 返回2', () => {
  expect(returnTypeNumber(true)).toBe(1)
  expect(returnTypeNumber(false)).toBe(2)
})



test("得到1或者2", () => {
  const r = queryNumber()
  expect([1,2]).toContain(r)
})