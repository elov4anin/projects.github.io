let page = {
    body: document.getElementById("body")
};

let enterForm  = {
    login: document.getElementById("login"),
    pass: document.getElementById('pass'),
    btn: document.getElementById('submitLogin'),
    active: function (wrap) {
        wrap.parentNode.classList.add('login__input-wrap--active');
    },
    error:  function (wrap) {
        wrap.parentNode.classList.remove('login__input-wrap--active');
        wrap.parentNode.classList.remove('login__input-wrap--success');
        wrap.parentNode.classList.add('login__input-wrap--error');
    },
    success:  function (wrap) {
        wrap.parentNode.classList.remove('login__input-wrap--active');
        wrap.parentNode.classList.remove('login__input-wrap--error');
        wrap.parentNode.classList.add('login__input-wrap--success');
    },
    validateLogin(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
};

enterForm.login.addEventListener('keyup', (e)=>{
    enterForm.active(enterForm.login);
    if ((e.target.value.length > 5) && (enterForm.validateLogin(e.target.value))) {
        enterForm.success(enterForm.login);
        enterForm.pass.focus();
    } else {
        enterForm.error(enterForm.login);
    }
});

enterForm.pass.addEventListener('keyup', (e)=>{
    enterForm.active(enterForm.pass);
    if ((e.target.value.length > 4)) {
        enterForm.success(enterForm.pass);
        enterForm.btn.removeAttribute('disabled');
    } else {
        enterForm.error(enterForm.pass);
    }
});

enterForm.btn.addEventListener('click', (e)=> {
    modal.isShow = true;
    modal.action();

});

let modal = {
    modal: document.getElementById('modal'),
    btn: document.getElementById('modalBtn'),
    class: 'modal--show',
    overlay: 'overlay',
    isShow: false,
    action: function () {
        if (this.isShow) {
            this.modal.classList.add(this.class);
            page.body.classList.add(this.overlay);
        } else {
            this.modal.classList.remove(this.class);
            page.body.classList.remove(this.overlay);
        }
    }
};

modal.btn.addEventListener('click', ()=> {
    modal.isShow = false;
    modal.action();
});