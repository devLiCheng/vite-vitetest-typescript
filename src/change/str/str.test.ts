import {expect, test} from 'vitest'
import {queryStr} from './index'

test("传入一个字符串那么也应该是得到一个字符串", () => {
  expect(queryStr("a")).toBe("输入的结果为：a")
})