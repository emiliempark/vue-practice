export default {
  validate(key, val) {
    const errors = [];
    if (!val) {
      errors.push(`${key}을 입력 해 주세요`);
    } else {
      if (key == "성함" && val.length < 1) {
        errors.push(`${key}은 최소 한 글자 이상 입력 해 주세요`);
      }

      // 숫자는 이름으로 입력할 수 없습니다.

      // 이메일 형식이 아닙니다.
      if (key == "이메일") {
        const regex = /\S+@\S+\.\S+/;
        const emailinput = String(val).toLowerCase();
        if (regex.test(emailinput)) {
          console.log("email validator", key, val);
        } else {
          errors.push(`${key} 형식이 틀립니다`);
        }
      }
      // 본문은 3글자 이상 입력 해 주세요.
      if (key == "본문" && val.length < 3) {
        errors.push(`${key}은 최소 세 글자 이상 입력 해 주세요`);
      }
    }

    return errors;
  },
};
