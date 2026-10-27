---
title: "대소문자 바꿔서 출력하기"
date: "2025-04-27"
summary: "각 문자를 toUpperCase()와 비교해 대소문자를 판별하고 반대로 바꾸는 풀이"
tags: ["문자열", "구현"]
---

## 문제

영어 알파벳으로 이루어진 문자열 `str`이 주어질 때, 대문자는 소문자로, 소문자는 대문자로 바꿔서 출력한다. (1 ≤ `str`의 길이 ≤ 20)

| 입력    | 출력    |
| ------- | ------- |
| aBcDeFg | AbCdEfG |

![만약 자신도 모르는 사이에 개가 바뀐다면?](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSharxI2R1LUcQVqbRiktRR_IVYxWdP_HqDvlBHDONmPw&s=10)

## 접근

문자 하나가 대문자인지는 `char === char.toUpperCase()`로 판별할 수 있다. 대문자는 대문자로 바꿔도 그대로이기 때문이다.

1. `split('')`으로 문자열을 문자 배열로 나눈다.
2. `map`으로 각 문자가 대문자면 `toLowerCase()`, 아니면 `toUpperCase()`를 적용한다.
3. `join('')`으로 다시 문자열로 합친다.

문자열을 한 번 순회하므로 O(n)이다.

## 코드

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = [line];
}).on("close", () => {
  const str = input[0];
  const result = str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join("");

  console.log(result);
});
```

---

### `split('')` 대신 `[...str]`

문자열을 문자 배열로 나눌 때 스프레드 문법을 써도 결과가 같다.

```js
"aBc".split(""); // ["a", "B", "c"]
[..."aBc"]; // ["a", "B", "c"]
Array.from("aBc"); // ["a", "B", "c"]
```

동작 방식은 다르다.

- `split('')`은 빈 문자열을 구분자로 삼아 **UTF-16 코드 유닛** 단위로 자른다.
- `[...str]`은 문자열의 **이터레이터**(`String.prototype[Symbol.iterator]`)를 돌면서 값을 하나씩 꺼내 배열에 담는다.

알파벳처럼 코드 유닛 1개로 표현되는 문자는 두 방식의 결과가 같다. 차이는 이모지처럼 코드 유닛 2개로 이루어진 문자에서 생긴다.

```js
"a😀".split(""); // ["a", "\ud83d", "\ude00"]  ← 이모지가 반으로 쪼개짐
[..."a😀"]; // ["a", "😀"]
```

그래서 일반 텍스트를 문자 단위로 다룰 때는 `[...str]`이 더 안전하다. 이 문제는 알파벳만 들어오므로 어느 쪽을 써도 된다.

```js
const result = [...str]
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
  )
  .join("");
```

> 입력이 알파벳으로만 이루어져 있어서 `toUpperCase()` 비교만으로 판별이 된다. 숫자나 기호가 섞이면 `toUpperCase()` 결과가 자기 자신이라 대문자로 오판하므로, 그때는 `/[A-Z]/` 정규식으로 판별하는 편이 안전하다.
