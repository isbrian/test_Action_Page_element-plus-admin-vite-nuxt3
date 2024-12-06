<script setup lang="ts">
import pkg from '../../package.json'

definePageMeta({ layout: 'admin' })

const config = useRuntimeConfig()
</script>

<style scoped>
h5 {
  color: #f59e0b;
}
</style>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-row class="mt-8">
        <el-col :span="24">
          <el-card>
            <template #header>
              <span>開發進度</span>
            </template>
            <!-- <ul>
              <li v-for="item in done" :key="item" class="mb-3 flex items-center"><AdminIcon name="i-carbon-checkmark-outline" class="w-5 mr-2 flex-shrink-0 color-green-500" />{{ item }}</li>
            </ul> -->
            <div class="card">
              <h5>設定值：nuxt.config > package.json</h5>
              <div class="grid grid-cols-2 gap-4">
                <div>runtimeConfig / public / APP_NAME</div>
                <div>{{ config.public['APP_NAME'] }}</div>
                <div>runtimeConfig / public / APP_VERSION</div>
                <div>{{ config.public['APP_VERSION'] }}</div>
                <div>runtimeConfig / public / APP_TEST</div>
                <div>{{ config.public['APP_TEST'] }}</div>
              </div>

              <h5>設定值：nuxt.config > dev</h5>
              <div class="grid grid-cols-2 gap-4">
                <div>runtimeConfig / public / APP_MODE</div>
                <div>{{ config.public['APP_MODE'] }}</div>
                <div>runtimeConfig / public / APP_API</div>
                <div>{{ config.public['APP_API'] }}</div>
                <div>runtimeConfig / public / APP_API</div>
                <div>{{ config.public['APP_API'] }}</div>
              </div>

              <h5>設定值：package</h5>
              <div class="grid grid-cols-2 gap-4">
                <div>version</div>
                <div>{{ pkg.version }}</div>
                <div>name</div>
                <div>{{ pkg.name }}</div>
              </div>

              <h5>設定值：dev</h5>
              <div class="grid grid-cols-2 gap-4">無法直接取得，只能透過nuxt.config</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>
