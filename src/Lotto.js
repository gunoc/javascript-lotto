const MissionUtils = require("@woowacourse/mission-utils");
/// this.#numbers 가 뭐를 뜻하는지 어디에 써야하는지..??
// 리턴문이 필요할때와 아닐때의 차이
class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
    this.START_MESSAGE = "구입금액을 입력해 주세요.";
  }

  buyLotto() {
    MissionUtils.Console.print(this.START_MESSAGE);
    this.pay();
  }
  pay() {
    MissionUtils.Console.readLine("", (payNumber) => {
      MissionUtils.Console.print(""); // 공백
      this.countMyLottoSheets(payNumber);
    });
  }
  countMyLottoSheets(payNumber) {
    const countedSheets = payNumber / 1000;
    MissionUtils.Console.print(`${countedSheets}개를 구매했습니다.`);
    // this.generateRandomNumbers()
    this.printLotto(countedSheets);
  }
  generateRandomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6); //똑같은게 출력됨 리프레시 필요
    MissionUtils.Console.print(numbers);
    // this.printLotto(numbers)
    // this.validate(numbers)
  }
  printLotto(countedSheets){
    for(let i = 0; i < countedSheets ; i++){
      this.generateRandomNumbers()
    }
  }

  // validate(numbers) {

  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }
}

const lotto = new Lotto();
lotto.buyLotto();

module.exports = Lotto;
