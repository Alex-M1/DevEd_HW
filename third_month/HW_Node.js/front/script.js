const form = document.getElementById('form')
const fileUpload = document.getElementById('fileUpload')
const list = document.querySelector('#links')
const loader = document.querySelector('.preloader')

form.addEventListener('submit', (e) => e.preventDefault())

form.addEventListener('click', async (e) => {
  const id = e.target.getAttribute('id')
  if (id === 'send') {
    if (!fileUpload.files[0]) {
      return showErr('Добавьте файл для отправки')
    }
    const formData = new FormData();
    formData.append("image", fileUpload.files[0]);
    loader.classList.remove('loaded__hiding')
    const res = await fetch('http://localhost:3000', {
      method: 'POST',
      body: formData,
    })
    if (!res.ok) return showErr('Что то пошло не так, попробуйте снова')

    const data = await res.json()
    loader.classList.add('loaded__hiding')
    console.log(data)
    list.innerHTML = `
      <li>Small <a href="${data.small}">${data.small}</a></li>
      <li>Medium <a href="${data.medium}">${data.medium}</a></li>
      <li>Large <a href="${data.large}">${data.large}</a></li>
    `
  }
})

function showErr(msg) {
  const errorMsg = document.querySelector('.error');
  errorMsg.textContent = msg;
  errorMsg.classList.add('error-visible');
  setTimeout(() => {
    errorMsg.classList.remove('error-visible');
  }, 4000);
}