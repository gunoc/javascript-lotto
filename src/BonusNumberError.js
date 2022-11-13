// const MissionUtils = require("@woowacourse/mission-utils");
// this.#numbers 가 뭐를 뜻하는지 어디에 써야하는지..??
// 리턴문이 필요할때와 아닐때의 차이
class BonusNumberError {
  constructor(bonusNumber) {
    this.validateBonusNumber(bonusNumber);
  }
  validateBonusNumber(bonusNumber) {

    const regExp = new RegExp("^[0-9]+$");
    if (!regExp.test(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 1부터 45까지의 숫자 한 개를 입력해 주세요.");
    }

  }
}

module.exports = BonusNumberError;
