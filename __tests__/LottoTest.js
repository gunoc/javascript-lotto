const Lotto = require("../src/Lotto");
const BonusNumberError = require("../src/BonusNumberError");
const PayError = require("../src/PayError");
const TotalRatio = require("../src/TotalRatio");


describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "a", 4, 5, 6], [1, 2, "7", 4, 5, 6], [0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 77]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 검증 클래스 테스트", () => {
  test("보너스 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumberError([1, "ㅁ"], ["2"], ['']);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호에 범위가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new BonusNumberError([49], [0]);
    }).toThrow("[ERROR]");
  });
});

describe("입력 금액 검증 클래스 테스트", () => {
  test("입력 금액에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new PayError(['a']);
    }).toThrow("[ERROR]");
  });

  test("입력 금액이 1000보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new PayError([999]);
    }).toThrow("[ERROR]");
  });

  test("입력 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new PayError([1200]);
    }).toThrow("[ERROR]");
  });

});


