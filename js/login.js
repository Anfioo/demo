// 切换密码显示/隐藏
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.classList.remove('fa-eye');
        toggleBtn.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleBtn.classList.remove('fa-eye-slash');
        toggleBtn.classList.add('fa-eye');
    }
}

// 表单验证
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 验证指定账号密码
    if (username === '2022117356' && password === '2022117356@hbwlxy') {
        // 登录成功，跳转到index页面
        window.location.href = 'index.html';
        return false;
    } else {
        // 登录失败，显示错误信息
        showError('账号或密码错误，请重试');
        return false;
    }
}

// 显示错误信息
function showError(message) {
    // 创建错误提示元素
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4d4f';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.marginTop = '10px';
    errorDiv.innerHTML = message;

    // 获取登录按钮元素
    const loginBtn = document.querySelector('.login-btn');
    
    // 移除已存在的错误信息
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // 在登录按钮后插入错误信息
    loginBtn.parentNode.insertBefore(errorDiv, loginBtn.nextSibling);
    
    // 3秒后自动移除错误信息
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}
