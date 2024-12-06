/*
  這是資料庫的初始化資料

  nuxt 使用的 nitro 服務器自帶 storage layer，
  可以直接使用 unstorage 的 fs driver 產生數據欓，
  可增刪改查的輕量數據庫存儲功能。
*/
export const initData = {
  routers: [
    {
      name: 'tt' /* 路由名稱（唯一） */,
      path: '/tt/' /* 路由地址（必填） */,
      meta: {
        title: 'ＴＥＳＴ測試' /* 菜單標題 */,
        icon: 'i-carbon-tool-box' /* 菜單圖標（iconify 使用 'i-'，svg 使用 'svg-'） */
      },
      children: [
        {
          name: 'tt-element-plus',
          path: '/tt/feedback',
          meta: {
            title: '反饋組件',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        },
        {
          name: 'tt-element-plus',
          path: '/tt/seo',
          meta: {
            title: 'SEO',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        },
        {
          name: 'tt-element-plus',
          path: '/tt/config',
          meta: {
            title: '設定檔',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        },
        {
          name: 'tt-element-plus',
          path: '/tt/store',
          meta: {
            title: 'pinia',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        },
        {
          name: 'tt-element-plus',
          path: '/tt/api',
          meta: {
            title: 'api',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        }
      ]
    },
    {
      name: 'tk' /* 路由名稱（唯一） */,
      path: '/tk/' /* 路由地址（必填） */,
      meta: {
        title: 'tk-memu' /* 菜單標題 */,
        icon: 'i-carbon-tool-box' /* 菜單圖標（iconify 使用 'i-'，svg 使用 'svg-'） */
      },
      children: [
        {
          name: 'tk-element-plus',
          path: '/tk/users',
          meta: {
            title: '用戶管理',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        }
      ]
    },
    {
      name: 'demo' /* 路由名稱（唯一） */,
      path: '/admin/demo' /* 路由地址（必填） */,
      meta: {
        title: '演示demo' /* 菜單標題 */,
        icon: 'i-carbon-tool-box' /* 菜單圖標（iconify 使用 'i-'，svg 使用 'svg-'） */
      },
      children: [
        {
          name: 'demo-table',
          path: '/admin/demo/table',
          meta: {
            title: '表格用法',
            icon: 'i-carbon-cross-tab',
            showParent: true
          },
          children: [
            {
              name: 'demo-table-draggable',
              path: '/admin/demo/table/draggable',
              meta: {
                title: '可拖拽表格',
                icon: 'i-carbon-move',
                showParent: true
              }
            },
            {
              name: 'demo-table-inline-edit',
              path: '/admin/demo/table/inline-edit',
              meta: {
                title: '行內編輯',
                icon: 'i-ep-edit-pen',
                showParent: true
              }
            },
            {
              name: 'demo-table-dynamic-row',
              path: '/admin/demo/table/dynamic-row',
              meta: {
                title: '動態增減行',
                icon: 'i-carbon-row-insert',
                showParent: true
              }
            }
          ]
        },
        {
          name: 'demo-element-plus',
          path: '/admin/demo/element-plus',
          meta: {
            title: 'Element 組件',
            icon: 'i-ep-element-plus',
            showParent: true
          }
        },
        {
          name: 'demo-china-area-cascader',
          path: '/admin/demo/china-area-cascader',
          meta: {
            title: '省市區選擇器',
            icon: 'i-carbon-map',
            showParent: true
          }
        },
        {
          name: 'demo-count-up',
          path: '/admin/demo/count-up',
          meta: {
            title: '數字動畫',
            icon: 'i-carbon-character-whole-number',
            showParent: true
            // noCache: true,
          }
        },
        {
          name: 'demo-scroll-notice',
          path: '/admin/demo/scroll-notice',
          meta: {
            title: '滾動通知',
            icon: 'i-carbon-star-review',
            showParent: true
          }
        },
        {
          name: 'demo-pdf',
          path: '/admin/demo/pdf',
          meta: {
            title: 'PDF 預覽',
            icon: 'i-carbon-document-pdf',
            showParent: true
          }
        },
        {
          name: 'demo-tinyMCE',
          path: '/admin/demo/tinyMCE',
          meta: {
            title: '富文本編輯器',
            icon: 'i-carbon-language',
            showParent: true
          }
        },
        {
          name: 'demo-icon',
          path: '/admin/demo/icon',
          meta: {
            title: 'Iconify 在線圖標',
            icon: 'i-carbon-face-satisfied',
            showParent: true
          }
        }
      ]
    }
  ],
  users: [
    {
      username: 'mock', // 模擬登錄用戶
      roles: ['admin'], // 模擬角色
      accessToken: 'mocked-access-token', // 模擬訪問 token
      maxAge: 60, // 過期時間, 單位: 秒, 默認 1 分鐘過期，
      refreshToken: 'mockedRefreshedToken.adminRefresh' // 模擬刷新 token
    }
  ],
  pp: [
    {
      name: 'pp-xdddddx' /* 路由名稱（唯一） */,
      path: '/pp/demo' /* 路由地址（必填） */,
      meta: {
        title: '演示pp' /* 菜單標題 */,
        icon: 'i-carbon-tool-box' /* 菜單圖標（iconify 使用 'i-'，svg 使用 'svg-'） */
      }
    }
  ],
  test: [
    {
      username: 'test-mock', // 模擬登錄用戶
      roles: ['admin'], // 模擬角色
      accessToken: 'test-mocked-access-token', // 模擬訪問 token
      maxAge: 60, // 過期時間, 單位: 秒, 默認 1 分鐘過期，
      refreshToken: 'test-mockedRefreshedToken.adminRefresh' // 模擬刷新 token
    }
  ]
}
