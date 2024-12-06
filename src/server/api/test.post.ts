/**
 * /api/login 的後端返回：
 */
export interface testResponse {
  // 用戶名
  username: string
  // 權限角色
  roles: Array<string>
  // 訪問接口使用的 token
  accessToken: string
  // accessToken 的過期時長
  maxAge: number
  // 用於調用刷新 accessToken 的接口時所需的 token
  refreshToken: string
}

/** TODO: for http result dto */
// export interface httpResult<T> {
//   success: boolean
//   data: T
// }

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const storage = useStorage()
  const user = (await storage.getItem('db:test')).find((user: any) => user.username === 'test-mock')

  user.username = body?.username

  console.log('這一段只會顯示在server的console', user.username)

  // mock login api response
  return {
    success: true,
    data: user
  }
  // return http.request<UserResult>('post', '/login', { data })
})
