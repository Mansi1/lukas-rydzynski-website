export const scrollToId = (hash: string): boolean => {
  const id = hash.replace("#", "")
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: window.scrollY + element.getBoundingClientRect().top,
      behavior: "smooth",
    })
    return true
  }
  return false
}
