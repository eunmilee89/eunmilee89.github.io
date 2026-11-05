---
title: "옹알이 (1)"
date: "2026-03-03"
summary: "발음 가능한 단어를 구분자로 치환한 뒤 구분자만 남는지 확인한다"
tags: ["문자열", "구현"]
---

## 문제

조카는 `"aya"`, `"ye"`, `"woo"`, `"ma"` 네 가지 발음을 최대 한 번씩 이어 붙인 발음만 할 수 있다. 문자열 배열 `babbling`이 주어질 때 조카가 발음할 수 있는 단어의 개수를 반환한다.

- 1 ≤ `babbling`의 길이 ≤ 100
- 1 ≤ `babbling[i]`의 길이 ≤ 15
- 각 문자열에서 네 발음은 각각 최대 한 번씩만 등장한다.
- 문자열은 알파벳 소문자로만 이루어져 있다.
- 네 발음을 붙여 만들 수 없는 부분이 하나라도 있으면 발음할 수 없다. (예: `"woowo"`는 `"wo"` 때문에 불가)

| babbling                                      | result |
| --------------------------------------------- | ------ |
| `["aya", "yee", "u", "maa", "wyeoo"]`         | `1`    |
| `["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]` | `3`    |

## 접근

발음 가능한 조각을 지워 나가서 아무것도 남지 않으면 발음 가능한 단어다. 이때 빈 문자열로 지우면 `"wyeoo"`에서 `"ye"`를 지운 결과가 `"woo"`가 되어 잘못 통과하므로, 빈 문자열 대신 구분자 `-`로 치환해 앞뒤 글자가 붙지 않게 한다.

1. 각 단어마다 네 발음을 하나씩 `-`로 치환한다. 각 발음은 최대 한 번만 등장하므로 첫 번째만 바꾸는 `replace`로 충분하다.
2. 치환 결과에서 `replaceAll`로 `-`를 모두 지운다.
3. 빈 문자열이 되면 발음 가능한 단어이므로 개수를 센다.

시간복잡도는 단어 수를 n, 단어 길이를 m이라 할 때 O(n·m)이다.

## 코드

```js
function solution(babbling) {
  const sounds = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    for (const sound of sounds) {
      word = word.replace(sound, "-");
    }

    if (word.replaceAll("-", "") === "") {
      count++;
    }
  }

  return count;
}
```

> `"wyeoo"`처럼 가운데 발음을 지우면 새 발음이 생기는 경우가 핵심 함정이다. 빈 문자열이 아닌 구분자로 치환해야 막을 수 있다.

## `for...of`

이터러블(배열, 문자열, Map, Set 등)의 **값**을 하나씩 꺼내 순회한다.

```js
const arr = ["aya", "ye"];
for (const v of arr) console.log(v); // "aya", "ye"

for (const ch of "ma") console.log(ch); // "m", "a"
```

- 배열에 쓰면 인덱스가 아니라 요소 값이 나온다.
- 일반 객체는 이터러블이 아니므로 쓸 수 없다. (`TypeError: obj is not iterable`)
- 객체를 돌고 싶다면 `Object.entries(obj)`처럼 배열로 바꿔서 쓴다.

이 풀이처럼 배열의 값을 순서대로 다룰 때 쓴다. 바깥 루프가 `let word`인 이유는 루프 안에서 `word`에 다시 대입하기 때문이고, 안쪽 `sound`는 대입하지 않으므로 `const`를 쓴다.

## `for...in`

객체의 열거 가능한 **속성 키**를 하나씩 꺼내 순회한다.

> 우리가 쉽게 예상하는 값들이 아닌 속성 키를 가져온다.
> (옷을 갈아입나 했더니, 다른 걸 벗었다. 딩디리리리리리링~)
> ![머리가 날라간 리락쿠마](https://scontent-icn2-1.cdninstagram.com/v/t51.82787-15/844003374_17992871817106369_5741183348080242153_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=NDAwODU2NDY0ODIwNzkxMDkxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMzIwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=7p9tM7_yX3EQ7kNvwFfBt_-&_nc_oc=AdrvAGBUp0nQktiL0oE0cBiYgicfXulnq8OOe7PUOMIXa7IZcBBmWXqDVDo5ibeaDio&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-icn2-1.cdninstagram.com&_nc_gid=15uHlyieq19zI2QYfDR3Pg&_nc_ss=7320f&oh=00_AQT-3N4fn8Mfx0I3d8QpkhscrM2_wwni7Pbg_iniK35ezA&oe=6AEE86DA)

<br/>

```js
const obj = { a: 1, b: 2 };
for (const k in obj) console.log(k, obj[k]); // "a" 1, "b" 2

const arr = ["aya", "ye"];
for (const k in arr) console.log(k); // "0", "1" (문자열)
```

- 키는 항상 문자열이다. 배열에 쓰면 인덱스가 숫자가 아닌 문자열로 나온다.
- 프로토타입 체인에서 상속된 열거 가능한 속성까지 순회한다.
- 이런 이유로 배열 순회에는 권장하지 않고, 일반 객체의 키를 돌 때 쓴다.

> 정리하면 값을 원하면 `for...of`, 객체의 키를 원하면 `for...in`이다.
