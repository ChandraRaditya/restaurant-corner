const nav = () => {
  const menu = document.querySelector('nav')
  const menuappbutton = document.querySelector('.menu-app')
  const menuexitbutton = document.querySelector('.menu-exit')
  const menulistitem = document.querySelectorAll('.menu-list-item')
  menuappbutton.onclick = () => {
    menu.classList.add('show')
  }
  menuexitbutton.onclick = () => {
    menu.classList.remove('show')
  }
  menulistitem.forEach(listItem => {
    listItem.onclick = () => {
      menu.classList.remove('show')
    }
  })
}

export default nav
