import { defineStore } from 'pinia'
import { apiRequest } from '@/utils/api'

interface User {
  id: number
  avatar: string
  balance: number
  code: string
  comments_num: number
  created_at: string
  forums_num: number
  is_disabled: number
  level: string
  nickname: string
  score: number
  updated_at: string
}
interface UsersList {
  code: number | null
  current_page: number
  data: User[]
  last_page: number
  msg: string
  per_page: number
  success: boolean
  total: number
}
interface SearchParams {
  nickname?: string
  created_at_start?: string
  created_at_end?: string
  per_page?: number
  page?: number
}

export const useUsersStore = defineStore('users', () => {
  /*--------------
  state 
  --------------*/
  const usersList = ref<UsersList>({
    code: null,
    current_page: 1,
    data: [],
    last_page: 1,
    msg: '',
    per_page: 0,
    success: false,
    total: 0
  })

  /*--------------
   actions 
   --------------*/
  // 通用 API 請求方法
  async function fetchUsers(endpoint: string, params: any = {}): Promise<void> {
    try {
      const response = await apiRequest('GET', endpoint, params)
      usersList.value = response
    } catch (error) {
      console.error('API request failed:', error)
    }
  }

  // 帳戶啟用
  async function upUserAllow(userId: number): Promise<void> {
    try {
      await apiRequest('POST', `/admin/api/v1/users/${userId}/allow`)
    } catch (error) {
      console.error('Failed to allow user:', error)
    }
  }

  // 帳戶關閉
  async function upUserDeny(userId: number): Promise<void> {
    try {
      await apiRequest('POST', `/admin/api/v1/users/${userId}/deny`)
    } catch (error) {
      console.error('Failed to deny user:', error)
    }
  }

  // 獲取所有用戶
  async function getTkUsersByAll(params: SearchParams = {}): Promise<void> {
    const { nickname, created_at_start, created_at_end, per_page, page } = params
    const query = new URLSearchParams({
      ...(per_page && { per_page: per_page.toString() }),
      ...(page && { page: page.toString() }),
      ...(nickname && { nickname }),
      ...(created_at_start && { created_at_start }),
      ...(created_at_end && { created_at_end })
    }).toString()
    await fetchUsers(`/admin/api/v1/users?${query}`)
  }

  // 根據暱稱獲取用戶
  async function getTkUsersByNickname(nickname: string): Promise<void> {
    await fetchUsers(`/admin/api/v1/users`, { nickname })
  }

  // 獲取用戶（可能不帶參數）
  async function getTkUsers(): Promise<void> {
    await fetchUsers('/admin/api/v1/users')
  }

  return { upUserAllow, upUserDeny, getTkUsersByAll, getTkUsersByNickname, getTkUsers, usersList }
})
