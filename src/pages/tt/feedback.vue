<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

definePageMeta({ layout: 'admin' })

// Dialog ------------------------------------------
const dialogVisible = ref(false)

// 關閉按鈕的處理方法
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

// ElMessageBox ------------------------------------------
const openElMessageBox02 = () => {
  ElMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email'
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `Your email is:${value}`
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Input canceled'
      })
    })
}

const openElMessageBox01 = () => {
  ElMessageBox.confirm('訊息內容', '標題', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning' //開頭符號
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}

const openElMessageBox = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    // action 用來接收操作後的結果
    callback: action => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`
      })
    }
  })
}

// ElMessage ------------------------------------------
const open01 = () => {
  // 默認樣式
  ElMessage('默認樣式，3秒關閉')
}
const open02 = () => {
  ElMessage({
    // 成功樣式
    message: '關閉時間設置為0，持續顯示',
    type: 'success',
    duration: 0
  })
}
const open03 = () => {
  ElMessage({
    // 警告樣式
    message: '關閉時間設置為5秒，可手動關閉',
    type: 'warning',
    duration: 5000,
    showClose: true
  })
}

const open1 = () => {
  // 默認樣式
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    // 成功樣式
    message: 'Congrats, this is a success message.',
    type: 'success'
  })
}
const open3 = () => {
  ElMessage({
    // 警告樣式
    message: 'Warning, this is a warning message.',
    type: 'warning'
  })
}
const open4 = () => {
  // 錯誤樣式，使用 ElMessage.error 函數彈出
  ElMessage.error('Oops, this is a error message.')
}

onMounted(async () => {
  console.log('onMounted')
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
              <h2>Feedback反饋組件</h2>
              <div class="grid grid-cols-2 gap-4"></div>
              <hr />
              <h1>ElMessage</h1>
              <div>
                <el-button type="info" @click="open1">message</el-button>
                <el-button type="success" @click="open2">success</el-button>
                <el-button type="warning" @click="open3">warning</el-button>
                <el-button type="danger" @click="open4">error</el-button>
                <el-button type="success" @click="open01">默認樣式，3秒關閉</el-button>
                <el-button type="success" @click="open02">關閉時間設置為0，持續顯示</el-button>
                <el-button type="success" @click="open03">關閉時間設置為5秒，可手動關閉</el-button>
              </div>

              <h1>MessageBox</h1>
              <div>
                <el-button type="success" @click="openElMessageBox">Click to open the Message Box</el-button>
                <el-button type="success" @click="openElMessageBox01">Click to open the Message Box</el-button>
                <el-button type="success" @click="openElMessageBox02">Click to open Message Box</el-button>
              </div>

              <h1>Dialog</h1>
              <div>
                <el-button type="success" @click="dialogVisible = true"> click to open the Dialog </el-button>

                <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
                  <span>This is a message</span>
                  <!-- 使用插槽定製功能按鈕，如不需要可不定義 -->
                  <template #footer>
                    <span class="dialog-footer">
                      <el-button @click="dialogVisible = false">Cancel</el-button>
                      <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
                    </span>
                  </template>
                </el-dialog>
                <div></div>
                <!-- <div></div>需要有這層組件才能正確顯示 -->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>
