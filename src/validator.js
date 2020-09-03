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
      // 본문은 3글자 이상 입력 해 주세요.
    }

    return errors;
  },
};
