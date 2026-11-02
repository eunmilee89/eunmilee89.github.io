---
title: "주사위 게임"
date: "2026-02-01"
summary: "같은 숫자 쌍의 개수(또는 숫자별 등장 횟수)로 다섯 가지 경우를 구분한다"
tags: ["구현", "해시"]
---

## 문제

1~6이 적힌 주사위 네 개를 굴려 나온 숫자 `a`, `b`, `c`, `d`로 점수를 계산한다.

- 네 개가 모두 `p`로 같으면 `1111 × p`
- 세 개가 `p`, 나머지 하나가 `q`이면 `(10 × p + q)²`
- 두 개씩 `p`, `q`로 같으면 `(p + q) × |p - q|`
- 두 개가 `p`, 나머지 두 개가 서로 다른 `q`, `r`이면 `q × r`
- 네 개가 모두 다르면 가장 작은 숫자

제한사항

- `a`, `b`, `c`, `d`는 1 이상 6 이하의 정수

| a   | b   | c   | d   | result |
| --- | --- | --- | --- | ------ |
| `2` | `2` | `2` | `2` | `2222` |
| `4` | `1` | `4` | `4` | `1681` |
| `6` | `3` | `3` | `6` | `27`   |
| `2` | `5` | `2` | `6` | `30`   |
| `6` | `4` | `2` | `5` | `2`    |

## 접근

네 숫자 중 같은 값을 갖는 쌍(i < j)의 개수를 세면 경우가 하나씩 갈린다. 모두 다르면 0쌍, 한 쌍이면 1쌍, 두 쌍이면 2쌍, 트리플이면 3쌍(₃C₂), 네 개가 모두 같으면 6쌍(₄C₂)이다.

1. 이중 반복문으로 같은 값의 쌍을 세면서, 처음 나온 같은 값은 `sameNum`, 그와 다른 같은 값은 `anotherSameNum`에 저장한다.
2. 쌍의 개수로 분기한다.
   - 0쌍: 최솟값
   - 1쌍: `indexOf`와 `lastIndexOf`가 같은(한 번만 나온) 두 숫자를 곱한다.
   - 2쌍: `(p + q) × |p - q|`
   - 3쌍: `sameNum`이 아닌 숫자 하나를 `q`로 두고 `(10 × p + q)²`
   - 4쌍 이상: `1111 × p`
3. 네 개가 모두 같으면 쌍이 6개지만, `count <= 3` 조건으로 4에서 멈추므로 `case 4`로 처리된다.

입력 크기가 4로 고정이라 시간복잡도는 O(1)이다.

## 내가 푼 풀이

```js
function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  let count = 0;
  let sameNum;
  let anotherSameNum;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && count <= 3) {
        count++;
        if (sameNum === undefined) {
          sameNum = arr[i];
        } else if (sameNum !== arr[i]) {
          anotherSameNum = arr[i];
        }
      }
    }
  }

  switch (count) {
    case 0:
      return Math.min(...arr);
    case 1: {
      const singles = arr.filter(
        (item) => arr.indexOf(item) === arr.lastIndexOf(item),
      );
      return singles[0] * singles[1];
    }
    case 2:
      return (sameNum + anotherSameNum) * Math.abs(sameNum - anotherSameNum);
    case 3: {
      const diff = arr.filter((item) => item !== sameNum);
      return (10 * sameNum + diff[0]) ** 2;
    }
    case 4:
      return 1111 * sameNum;
  }
}
```

> `case` 안에서 `const`를 선언할 때는 `{}` 블록으로 감싸야 다른 `case`와 스코프가 섞이지 않는다.

## 모범 답안: 숫자별 등장 횟수

모범 답안은 숫자마다 몇 번 나왔는지 세고, **서로 다른 숫자의 개수**와 **최대 등장 횟수**로 분기하는 것이다. 쌍의 개수를 세는 것보다 각 경우가 문제 설명과 그대로 대응해 읽기 쉽다.

1. 객체(또는 `Map`)에 숫자별 등장 횟수를 기록한다.
2. `[숫자, 횟수]` 배열을 횟수 내림차순으로 정렬한다.
3. 서로 다른 숫자 개수로 분기한다.
   - 1개: 네 개 모두 같음
   - 2개: 최다 횟수가 3이면 트리플, 2면 두 쌍
   - 3개: 한 쌍 + 서로 다른 두 숫자
   - 4개: 모두 다름

```js
function solution(a, b, c, d) {
  const count = {};
  [a, b, c, d].forEach((n) => {
    count[n] = (count[n] || 0) + 1;
  });

  const entries = Object.entries(count)
    .map(([num, cnt]) => [Number(num), cnt])
    .sort((x, y) => y[1] - x[1]);

  switch (entries.length) {
    case 1:
      return 1111 * entries[0][0];
    case 2: {
      const [[p, pCount], [q]] = entries;
      return pCount === 3 ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q);
    }
    case 3:
      return entries[1][0] * entries[2][0];
    default:
      return Math.min(a, b, c, d);
  }
}
```

> `Object.entries`의 키는 문자열이므로 `Number()`로 변환해야 덧셈이 문자열 연결로 바뀌지 않는다.
