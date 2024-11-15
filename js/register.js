// 切换密码显示/隐藏
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const toggleBtn = passwordInput.nextElementSibling;
    
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
function validateRegisterForm() {
    const studentId = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // 学号/工号验证
    if (!/^\d{8,12}$/.test(studentId)) {
        showError('请输入有效的学号或工号');
        return false;
    }
    
    // 姓名验证
    if (!/^[\u4e00-\u9fa5]{2,4}$/.test(name)) {
        showError('请输入2-4个汉字的真实姓名');
        return false;
    }
    
    // 邮箱验证
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('请输入有效的邮箱地址');
        return false;
    }
    
    // 密码验证
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(password)) {
        showError('密码必须包含字母和数字，长度8-20位');
        return false;
    }
    
    // 确认密码
    if (password !== confirmPassword) {
        showError('两次输入的密码不一致');
        return false;
    }
    
    // 收集表单数据
    const formData = {
        studentId,
        name,
        email,
        password
    };
    
    // 输出表单数据
    console.log('表单数据：', formData);
    alert('表单数据：' + JSON.stringify(formData));
    alert('注册请求已发送');
    alert('注册成功');
    
    // 这里可以添加注册请求的代码
    console.log('注册请求已发送');
    return false; // 阻止表单提交
}

// 显示错误信息
function showError(message) {
    alert(message); // 这里可以改为更优雅的提示方式
}

