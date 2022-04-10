const searchBox = document.getElementById('search')

searchBox.addEventListener('keydown', (e) => {
  if (e.code == 'Enter' || e.code == 'NumpadEnter') {
    const { value } = searchBox
    if (value.replace(/ /gm, '').length > 0) location.href = `https://www.google.com/search?q=${value}`
    else searchBox.value = ''
  }
})

window.onload = () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
}
