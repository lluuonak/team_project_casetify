export const FormValidate = (formData) => {
    // 동의 항목만 검증합니다.
    const { agree1, agree2 } = formData;
    if (!agree1) {
        return { error: -1, message: '구매조건 확인 및 결제진행에 동의는 필수 입니다.' };
    } else if (!agree2) {
        return { error: -2, message: '구매조건 확인 및 결제진행에 동의는 필수 입니다.' };
    } else {
        return { error: 0, message: '' };
    }
};
