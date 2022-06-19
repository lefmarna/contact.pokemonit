export const useClipboard = () => {
  const writeToClipboard = (clipText: string): void => {
    navigator.clipboard.writeText(clipText).catch((e) => {
      console.error(e)
    })
  }
  return { writeToClipboard }
}
