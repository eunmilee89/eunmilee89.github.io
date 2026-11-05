---
title: "문자열 겹쳐쓰기"
date: "2026-01-29"
summary: "slice로 앞뒤를 잘라내고 가운데에 덮어쓸 문자열을 끼워 넣는 풀이"
tags: ["문자열", "구현"]
---

## 문제

문자열 `my_string`, `overwrite_string`과 정수 `s`가 주어질 때, `my_string`의 인덱스 `s`부터 `overwrite_string`의 길이만큼을 `overwrite_string`으로 바꾼 문자열을 반환한다.

- `my_string`과 `overwrite_string`은 숫자와 알파벳으로 이루어져 있다.
- 1 ≤ `overwrite_string`의 길이 ≤ `my_string`의 길이 ≤ 1,000
- 0 ≤ `s` ≤ `my_string`의 길이 - `overwrite_string`의 길이

| my_string        | overwrite_string | s   | result           |
| ---------------- | ---------------- | --- | ---------------- |
| `He11oWor1d`     | `lloWorl`        | 2   | `HelloWorld`     |
| `Program29b8UYP` | `merS123`        | 7   | `ProgrammerS123` |

## 접근

문자열은 불변이라 특정 구간만 직접 바꿀 수 없다. 대신 세 부분으로 나눠 다시 이어 붙인다.

1. `my_string.slice(0, s)`로 인덱스 `s` 앞까지를 남긴다.
2. 그 자리에 `overwrite_string`을 넣는다.
3. `my_string.slice(s + overwrite_string.length)`로 덮어쓴 구간 뒤의 나머지를 붙인다.

예제 1은 `"He"` + `"lloWorl"` + `"d"` = `"HelloWorld"`가 된다. 문자열 길이만큼 복사하므로 O(n)이다.

## 코드

```js
function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}
```

## `slice`에 인자를 하나만 넘기면

`slice(start, end)`는 `start`부터 `end` **직전**까지 잘라낸다. `end`를 생략하면 문자열 끝까지 잘라낸다.

```js
"HelloWorld".slice(0, 2); // "He"      ← 인덱스 0, 1
"HelloWorld".slice(2, 5); // "llo"     ← 인덱스 2, 3, 4
"HelloWorld".slice(5); // "World"   ← 인덱스 5부터 끝까지
```

생략된 `end`는 `str.length`와 같다. 그래서 `slice(5)`는 `slice(5, str.length)`와 결과가 같다.

이 풀이의 `my_string.slice(s + overwrite_string.length)`도 끝 인덱스를 따로 계산하지 않고, 덮어쓴 구간 다음 위치부터 끝까지를 그대로 가져온다. 덮어쓴 구간이 문자열 끝에 딱 맞으면 시작 인덱스가 `length`와 같아지고, 이때는 빈 문자열 `""`이 반환되어 결과에 영향을 주지 않는다.

```js
"abc".slice(3); // ""
```

## 다른 풀이: `splice`

문자열을 배열로 바꾸면 `splice`로 구간을 직접 교체할 수 있다.

```js
function solution(my_string, overwrite_string, s) {
  const arr = [...my_string];
  arr.splice(s, overwrite_string.length, ...overwrite_string);
  return arr.join("");
}
```

`splice(시작, 삭제할 개수, ...넣을 값)`은 `s`부터 `overwrite_string.length`개를 지우고 그 자리에 `overwrite_string`의 문자들을 넣는다.

> 제한사항에서 `s + overwrite_string.length ≤ my_string.length`가 보장되므로 범위를 벗어나는 경우는 따로 처리하지 않아도 된다.
