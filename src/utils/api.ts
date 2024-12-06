// api.ts
export const apiRequest = async (method: 'GET' | 'POST', url: string, data?: any): Promise<any> => {
  const config = useRuntimeConfig()
  const auth = config.public.APP_AUTH

  const options: any = {
    method: method,
    headers: {
      Authorization: auth,
      'Content-Type': 'application/json'
    }
  }

  if (method === 'POST' && data) {
    options.body = JSON.stringify(data)
  }

  const response = await $fetch(url, options)

  // console.log('apiRequest', response)

  return response
}

export const apiRequestFetch = async <T>(method: 'GET' | 'POST', url: string, params?: Record<string, any>): Promise<T> => {
  console.log('wwwwwwwwwwwwww')

  // const config = useRuntimeConfig()

  // console.log('config.public.apiBase', config)

  // const apiUrl = `${config.public.apiBase}${url}`

  // const auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTE3MDI2MjYsIm5iZiI6MTcxMTcwMjYyNiwiaXNzIjoidHVrdV9hZG1pbiIsImV4cCI6MTc0MzIzODYyNiwic3ViIjoxMzI0OSwicm9sZSI6ImFkbWluIn0.U5zJkvYKczdKzk1Nglw3_bBqaeTl3QpLb34MkSWGIoA'

  // try {
  //   const response = await $fetch<T>(apiUrl, {
  //     method,
  //     params,
  //     headers: {
  //       Authorization: auth,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   return response
  // } catch (error) {
  //   console.error(`Failed to fetch data from ${url}:`, error)
  //   throw error
  // }
}
