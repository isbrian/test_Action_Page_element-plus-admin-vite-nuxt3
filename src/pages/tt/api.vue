<script setup lang="ts">
import { storeToRefs } from 'pinia'
definePageMeta({ layout: 'admin' })

const testStore = useTestStore()
const { testToken, userList } = storeToRefs(testStore)

const vv = computed(() => {
  return testToken.value
})
const ss = computed(() => {
  return userList.value
})

testStore.testAC({ username: 'aa', password: '123456' })

onMounted(async () => {
  console.log('onMounted')

  try {
    const tk = await testStore.getTkUsers({})

    console.log('tk', tk)
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
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
              <h2>store呼叫API</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>computed</div>
                <div>{{ vv }}</div>
                <div>storeToRefs</div>
                <div>{{ testToken }}</div>
                <div>use store</div>
                <div>{{ testStore.testToken }}</div>
              </div>
            </div>
            <div class="card">
              <h2>tk-API呼叫</h2>
              <div class="grid grid-cols-2 gap-4">
                <div>computed</div>
                <div>{{ ss.msg }}</div>
                <div>storeToRefs</div>
                <div>{{ testToken }}</div>
                <div>use store</div>
                <div>{{ testStore.testToken }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>
