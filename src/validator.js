// constants for input fields
export const fields = {
  name: "성함",
  email: "이메일",
  message: "본문"
};

export default {
  validate(key, val) {
    const errors = [];
    if (!val) {
      errors.push(`${key}을 입력 해 주세요`);
    } else {
      // 숫자는 이름으로 입력할 수 없습니다.
      if (key === fields.name) {
        const regex = /^[가-힣a-zA-Z]+$/;
        if (!regex.test(val)) {
          errors.push(`${key}은 한글/영문만 가능합니다`);
        }
      }
      if (key === fields.email) {
        // 이메일 형식이 아닙니다.
        const regex = /\S+@\S+\.\S+/;
        const emailinput = String(val).toLowerCase();
        if (!regex.test(emailinput)) {
          errors.push(`${key} 형식이 틀립니다`);
        }
      }
      // 본문은 3글자 이상 입력 해 주세요.
      if (key === fields.message && val.length < 3) {
        errors.push(`${key}은 최소 세 글자 이상 입력 해 주세요`);
      }
    }

    return errors;
  }
};
