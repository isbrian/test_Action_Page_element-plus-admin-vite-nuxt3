<h1 align="center">
Nuxt3-admin
</h1>

**中文** | [English](./README.en-US.md)

## 简介
`nuxt3-admin` 是一个基于 `Nuxt 3` 的后台管理模板，使用最新的`Nuxt 3`、`TypeScript`、`Vue 3`、`Pinia`、`Element-Plus`、`Unocss` 等主流技术。  

## 环境框架
- Nuxt 3， `Node.js` 版本要 `>16.11`, 集成 `Vue 3`  
- TypeScript, 拥抱 `any`, 用起来再说。  
- pinia, 状态管理
- vueuse, 可复用的函数式组件
- eslint, ["@antfu/eslint-config"], 不必再配置 `prettier`
- czg, 交互式提交(commitizen)

## UI 框架  
- Element-Plus  
- unocss, ["@unocss/nuxt"]  
  - tailwind preset  
  - iconify, ["@iconify-json/carbon", "@iconify-json/ep", "@iconify-json/logos", "@iconify-json/twemoji"]  

## 使用方法  
- 拉取代码

```
git clone https://gitee.com/FnTop/nuxt3-admin.git  
```
- 忽略错误

```
yarn config set ignore-engines true
```
- 安装

```
yarn install
```
- 启动

```
yarn dev  
```

- 生产发布

```
yarn build  
```
