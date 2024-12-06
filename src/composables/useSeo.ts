// composables/useUsers.ts
import { ref } from 'vue'
import { useFetch } from '#app'

export const useSeo = () => {
  const config = useRuntimeConfig()
  const url = `${config.public.APP_API}${config.public.APP_API_PROXY_PREFIX}users` //'https://as.u33wcjtr8s2.site/admin/api/v1/users'
  const auth = config.public.APP_AUTH

  // 定義接口
  interface User {
    id: number
    level: string
    nickname: string
  }
  // 使用 ref 創建響應式變量
  const users = ref<User[]>([])
  const pposts = ref<User[]>([])
  const uuFetch = ref<User[]>([])
  const uuseAsync = ref<User[]>([])
  const xxx = ref<User[]>([])

  const usersError = ref<Error | null>(null)

  const usersByUseFetch = async () => {
    // console.log('run fetchUsers')

    const { data: fetched, error: fetchError } = await useFetch<User[]>(url, {
      method: 'GET',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      }
    })
    // console.log('fetched', fetched.value.data[0])

    if (fetched.value) {
      // console.log('run fetched')

      users.value = fetched.value
      pposts.value = fetched.value.data[0] // 假設數據格式正確

      // console.log('pposts', pposts)
    }
    if (fetchError.value) {
      usersError.value = fetchError.value
      console.error('Failed to fetch users data:', fetchError.value)
    }
  }

  const usersByFetch = async () => {
    const uFetch = await $fetch(url, {
      method: 'GET',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      }
    })
    uuFetch.value = uFetch.data[0]
    // console.log('$fetch uuFetch:', uuFetch)
  }

  const usersByUseAsyncData = async () => {
    const uuseAsync = ref<User[] | null>(null)
    const { data: useAsync, error } = await useAsyncData<User[]>('useAsync', () => {
      return $fetch(url, {
        method: 'GET',
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json'
        }
      })
    })
    if (useAsync.value) {
      xxx.value = useAsync.value.data[0]
      // console.log('uuseAsync:', xxx.value)
    } else if (error.value) {
      console.error('useAsyncData Failed:', error.value)
    } else {
      // console.log('useAsyncData No data and no error')
    }
  }

  return {
    xxx,
    uuseAsync,
    users,
    pposts,
    uuFetch,
    usersError,
    usersByUseFetch,
    usersByFetch,
    usersByUseAsyncData
  }
}
