// import { skipHydrate } from 'pinia'
import { apiRequest } from '@/utils/api'

const testOption = { maxAge: 2 * 60 * 60 }

export const useTestStore = defineStore('test', () => {
  /*--------------
  state 
  --------------*/
  const testToken = ref(useCookie('test-token', testOption)) // 2小時過期
  const userList = ref([])

  /*--------------
   actions 
   --------------*/
  async function getTkUsers(data: any): Promise<any> {
    console.log('run tk_test')

    const params: any = {
      header: {},
      data: {}
    }
    userList.value = await apiRequest('GET', '/admin/api/v1/users', params)

    console.log('testAPI.value', userList.value)

    return userList.value
  }

  async function testAC(data: any) {
    const { data: testResponse } = await $fetch('/api/test', { method: 'post', body: data })
    if (testResponse) {
      const { username, roles, accessToken, maxAge, refreshToken } = testResponse
      testToken.value = accessToken
    }
    return testResponse
  }

  return { testToken, testAC, getTkUsers, userList }
})
