export function renderLoginComponent({ appEl, setToken, getApiFunction}) {
    let appHtml = `<div class="container">
  <div class="add-form">
  <div class="form-header">Форма входа</div>
  <input type="text" id="get-form-name" class="add-form-name entrance-inputs" placeholder="Введите ваше имя" />
  <input type="text" id="get-form-login" class="add-form-name entrance-inputs" placeholder="Введите ваш логин" />
  <input type="password" id="get-form-password" class="add-form-name entrance-inputs"
    placeholder="Введите ваш пароль" />
  <div class="add-form-row entrance-buttons">
    <button id="login-form-button" class="add-form-button">Войти</button>
    <button id="switch-form-button" class="reg-form-button">Зарегистрироваться</button>
  </div>
  </div>`
        appEl.innerHTML = appHtml

        document.getElementById('login-form-button').addEventListener('click', () => {
            setToken("Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k")
            getApiFunction() // не знаю точно надо ли тут это? и так работает 
            // renderApp()
        })

}