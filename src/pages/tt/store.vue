<script setup lang="ts">
definePageMeta({ layout: 'admin' })
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
          <el-card class="p-24">
            <div class="card">
              <h5>Store 測試</h5>
              <div class="grid grid-cols-2 gap-4">
                <div>Theme count</div>
                <!-- <div>{{ tstore.count }}</div> -->
                <div>Theme count1</div>
                <!-- <div>{{ tstore.count1 }}</div> -->
              </div>

              <h5 class="font-bold text-2xl mb-4">store中呼叫API</h5>
              <div class="grid grid-cols-2 gap-4">
                <div>tuku-fetch</div>
                <!-- <div>{{ tstore.tuku.length }}</div> -->
                <div>tuku-axios</div>
                <!-- <div>{{ tstore.tukuAxios.length }}</div> -->
                <div>tuku-axios-new</div>
                <!-- <div>{{ tstore.tukuAxiosNew.length }}</div> -->
              </div>

              <h5 class="font-bold text-2xl mb-4">Data Store (Option Store)</h5>
              <span class="text-xs">Example of a Data Store</span>
              <div class="grid grid-cols-2 mt-6 gap-4">
                <div>Products</div>
                <!-- <div>{{ dataStore.products.length }}</div> -->
              </div>

              <h5 class="font-bold text-2xl mb-4">Counter Store (Setup Store)</h5>
              <span class="text-xs">Example of a Data Store</span>
              <div class="mt-6">
                <div>
                  <!-- <InputText v-model="counterStore.name" /> -->
                </div>
              </div>
              <!-- <div class="mt-3">{{ counterStore.name }} clicked {{ counterStore.count }} times. Doubled value: {{ counterStore.doubleCount }}</div> -->
              <div class="mt-3">
                <!-- <Button :label="counterStore.name" @click="counterStore.increment()" /> -->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>
