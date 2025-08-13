export const ValidateLogin = (data) => {
    const { email, password } = data;

    if (!validateEmail(email)) {
        return { error: -1 };
    }

    if (!validatePassword(password)) {
        return { error: -2 };
    }

    return { error: 0 };
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePassword = (password) => {
    // 예: 8자 이상, 숫자 포함
    return password.length >= 8 && /\d/.test(password);
};
