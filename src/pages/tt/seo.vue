<script setup lang="ts">
import { useFetch } from '#app'
import { useRuntimeConfig } from '#app'

definePageMeta({ layout: 'admin' })

const { xxx, users, pposts, usersError, uuFetch, uuseAsync, usersByUseFetch, usersByFetch, usersByUseAsyncData } = useSeo()
await usersByFetch()
await usersByUseAsyncData()
await usersByUseFetch()

// ----------------------------------------------------------------------------
// server端渲染，不適合放入生命週期（屬於client）
// ----------------------------------------------------------------------------

// 設置 meta 標籤
useHead({
  title: pposts.value.nickname,
  meta: [
    { name: 'description', content: pposts.value.nickname },
    { name: 'keywords', content: pposts.value.level }
  ]
})

onMounted(async () => {
  console.log('onMounted', pposts.value.id)
})
</script>
<style scoped>
h2 {
  color: #f59e0b;
}
</style>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-row class="mt-8">
        <el-col :span="24">
          <el-card class="p-24">
            <div class="card">
              <h2>SEO設定</h2>
              <div class="grid grid-cols-2 gap-4"></div>
              <hr />
              <h1>useFetch</h1>
              <div v-if="pposts">
                <Suspense>
                  <template #default>
                    <ul>
                      <li>[{{ pposts.id }}] {{ pposts.nickname }} - {{ pposts.level }}</li>
                    </ul>
                  </template>
                  <template #fallback>
                    <div>Loading...</div>
                  </template>
                </Suspense>
              </div>

              <h1>$fetch</h1>
              <div v-if="uuFetch">
                <Suspense>
                  <template #default>
                    <ul>
                      <li>[{{ uuFetch.id }}] {{ uuFetch.nickname }} - {{ uuFetch.level }}</li>
                    </ul>
                  </template>
                  <template #fallback> Loading... </template>
                </Suspense>
              </div>

              <h1>useAsyncData</h1>
              <Suspense>
                <template #default>
                  <ul>
                    <li>[{{ xxx.id }}] {{ xxx.nickname }} - {{ xxx.level }}</li>
                  </ul>
                </template>
                <template #fallback> Loading... </template>
              </Suspense>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>
