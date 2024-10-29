type Log = (s: string) => string

export const log: Log = (info) => `日志为：${info} ${JSON.stringify(import.meta.url)}`