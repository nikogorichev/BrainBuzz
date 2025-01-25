import { classNames } from "./classNames";

describe("classNames", () => {
  test("Только с первым аргументом", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("С дополнительными классами", () => {
    const expected = "someClass additionalClass1 additionalClass2";
    expect(classNames("someClass", {}, [ "additionalClass1", "additionalClass2" ])).toBe(expected);
  });

  test("С классами-модами", () => {
    const expected = "someClass additionalClass1 modeClass";
    expect(classNames("someClass", { modeClass: true }, [ "additionalClass1" ])).toBe(expected);
  });

  test("Если класс-мод имеет значение false", () => {
    const expected = "someClass additionalClass1 modeClass";
    expect(classNames("someClass", { modeClass: true, hovered: false }, [ "additionalClass1" ])).toBe(
      expected
    );
  });
});
