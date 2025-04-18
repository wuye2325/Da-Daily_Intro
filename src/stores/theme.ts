import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>('light')

  // 初始化主题
  const initTheme = () => {
    // 1. 首先检查 HTML data-theme 属性
    const htmlTheme = document.documentElement.getAttribute('data-theme')
    if (htmlTheme === 'dark' || htmlTheme === 'light') {
      theme.value = htmlTheme
    } else {
      // 2. 然后检查 localStorage
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'dark' || savedTheme === 'light') {
        theme.value = savedTheme
      } else {
        // 3. 最后检查系统偏好
        theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    }
    applyTheme()
  }

  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme()
  }

  // 应用主题
  const applyTheme = () => {
    // 更新 HTML data-theme 属性
    document.documentElement.setAttribute('data-theme', theme.value)
    // 保存到 localStorage
    localStorage.setItem('theme', theme.value)
  }

  return {
    theme,
    initTheme,
    toggleTheme
  }
}) 