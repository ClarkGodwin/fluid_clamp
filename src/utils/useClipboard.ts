import { ref } from 'vue'

export function useClipboard() {
  const isCopied = ref(false)

  const copy = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      isCopied.value = true
      
      setTimeout(() => {
        isCopied.value = false
      }, 2000)
      
      return true
    } catch (error) {
      console.error('Erreur lors de la copie :', error)
      isCopied.value = false
      return false
    }
  }

  return { copy, isCopied }
}
