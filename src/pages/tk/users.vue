<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { ComponentSize } from 'element-plus'
import { ElTable } from 'element-plus'
import { ref, Ref } from 'vue'

definePageMeta({ layout: 'admin' })

const usersStore = useUsersStore()
const { usersList } = storeToRefs(usersStore)

// 帳戶啟用----------------------------------------------------------------------------
// 帳戶狀態切換
const chgAccStatus = (row: User) => {
  if (row.is_disabled) {
    if (confirm(`確定要封鎖用戶${row.nickname}用過的IP地址嗎?`)) {
      usersStore.upUserDeny(row.id)
    } else {
      row.is_disabled = false
    }
  } else {
    usersStore.upUserAllow(row.id)
  }
}

// 搜尋----------------------------------------------------------------------------
const searchNickname = ref<string>('')
const searchTime: Ref<[Date | null, Date | null] | null> = ref(null)
const searchDefaultTime: [Date, Date] = [
  new Date(new Date().setDate(new Date().getDate() - 7)), // 7天前
  new Date() // 今天
]

// 查詢參數接口
interface SearchParams {
  nickname?: string
  created_at_start?: string
  created_at_end?: string
  per_page?: number
  page?: number
}

const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0] // 轉換為 yyyy-MM-dd 格式
}

const fnSearchAll = (_currentPage: number) => {
  const [start, end] = searchTime.value || []

  if (start && end) {
    const params: SearchParams = {
      nickname: searchNickname.value,
      created_at_start: formatDate(start),
      created_at_end: formatDate(end),
      per_page: pageSize.value,
      page: _currentPage
    }

    usersStore.getTkUsersByAll(params)
  } else {
    console.warn('Start or end date is invalid')
  }
}

const fnSearchNickname = () => {
  usersStore.getTkUsersByNickname(searchNickname.value)
}

// 表單----------------------------------------------------------------------------
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

// 用戶資料接口
interface User {
  id: number
  avatar: string
  balance: number
  code: string
  comments_num: number
  created_at: string
  forums_num: number
  is_disabled: boolean
  level: string
  nickname: string
  score: number
  updated_at: string
}

const tableData = computed(() => {
  return usersList.value.data.map((item: User) => ({
    ...item,
    is_disabled: item.is_disabled === 1 // 將 is_disabled 轉換為布爾值
  }))
})

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

// 分頁----------------------------------------------------------------------------
const currentPage: Ref<number> = computed(() => usersList.value.current_page)
const totalPage: Ref<number> = computed(() => usersList.value.total)
const pageSize: Ref<number> = computed(() => usersList.value.per_page)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  // 處理每頁顯示的項目數量變化
  console.log(`Items per page changed to ${val}`)
}

const handleCurrentChange = (val: number) => {
  // 當前頁碼變化
  fnSearchAll(val)
}

// 當頁面掛載時獲取用戶資料
onMounted(() => {
  usersStore.getTkUsers()
})
</script>

<template>
  <NuxtLayout>
    <AdminContainer>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="pb-6">
            <template #header>
              用戶管理
              <el-button type="info" class="float-right"> 設置 </el-button>
            </template>

            1111111
            <!-- 搜尋 -->
            <el-row class="mb-4">
              <div class="mr-4 mb-2">
                <el-input v-model="searchNickname" style="max-width: 600px" placeholder="請輸入暱稱" class="input-with-select" clearable>
                  <template #prepend> 用戶暱稱 </template>
                  <template #append>
                    <!-- <el-button :icon="Search" /> -->
                    <el-button type="danger" @click="fnSearchNickname()">
                      <AdminIcon name="i-ep-search" />
                    </el-button>
                  </template>
                </el-input>
              </div>
              <div class="mr-4 mb-2">
                <el-date-picker v-model="searchTime" type="daterange" range-separator="To" style="width: auto" start-placeholder="開始日期" end-placeholder="結束日期" :default-value="searchDefaultTime" />
              </div>
              <div class="mr-4 mb-2">
                <el-button type="primary" @click="fnSearchAll(1)">
                  <AdminIcon name="i-ep-search" />
                </el-button>
              </div>
            </el-row>
            1111111
            <!-- 批量按鈕 -->
            <el-row v-if="multipleSelection.length > 0" class="mb-4">
              <el-button type="primary"> 通過 </el-button>
              <el-button type="success"> 復活 </el-button>
              <el-button type="info"> 下架 </el-button>
              <el-button type="warning"> 拒絕 </el-button>
              <el-button type="danger"> 刪除 </el-button>
            </el-row>

            <!-- 表格 -->
            <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" stripe>
              <el-table-column type="selection" width="55" />
              <el-table-column label="用戶暱稱" width="180">
                <template #default="scope">
                  <el-popover effect="light" trigger="hover" placement="top" width="auto">
                    <template #default>
                      <div>ＩＤ: {{ scope.row.id }}</div>
                      <div>等級: {{ scope.row.level }}</div>
                      <div>經驗: {{ scope.row.score }}</div>
                    </template>
                    <template #reference>
                      <el-tag>{{ scope.row.nickname }}</el-tag>
                    </template>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column property="code" label="邀請碼" />
              <el-table-column property="level" label="會員等級" />
              <el-table-column property="score" label="經驗" />
              <el-table-column property="forums_num" label="發帖數" />
              <el-table-column property="balance" label="彩金" />
              <el-table-column label="帳戶啟用">
                <template #default="scope">
                  <el-switch v-model="scope.row.is_disabled" active-text="關閉" inactive-text="啟用" @click="chgAccStatus(scope.row)" style="--el-switch-on-color: #c45656; --el-switch-off-color: #13ce66" inline-prompt />
                </template>
              </el-table-column>
              <el-table-column property="nickname" label="操作" align="center" width="270" fixed="right">
                <template #default="scope">
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 查看 </el-button>
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 編輯 </el-button>
                  <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 明細 </el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"> 刪除 </el-button>
                </template>
              </el-table-column>
            </el-table>

            <!-- 分頁 -->
            <div class="demo-pagination-block">
              <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[50, 100, 200, 300, 400]" :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper" :total="totalPage" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </AdminContainer>
  </NuxtLayout>
</template>

<style scoped>
/* show menu */
:deep(.el-card) {
  box-shadow: var(-el-box-shadow-lighter);
}
</style>
<style scoped>
h2 {
  color: #f59e0b;
}
</style>
<style scoped>
.demo-pagination-block {
  float: right;
  margin-top: 1rem;
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>

<style>
.el-table th.el-table__cell {
  user-select: none;
  background-color: #eaeaea;
}
</style>
