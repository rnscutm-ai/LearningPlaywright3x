# JavaScript String Methods — Complete Cheatsheet (SDET)

All outputs verified on Node.js v22. Strings are **immutable** — every method returns a _new_ string.

```js
let s = "abc";
s[0] = "z";
console.log(s);   // 'abc'  ← silently unchanged
```

---

## 1. Length & Character Access

| Method | Purpose | Example | Result |
| ----- | ----- | ----- | ----- |
| `.length` | character count (property, not a method) | `"Playwright".length` | `10` |
| `.charAt(i)` | char at index | `"Playwright".charAt(4)` | `'w'` |
| `[i]` | char at index (bracket) | `"Playwright"[4]` | `'w'` |
| `.at(i)` | char at index, **supports negative** | `"Playwright".at(-1)` | `'t'` |
| `.charCodeAt(i)` | UTF-16 code unit | `"A".charCodeAt(0)` | `65` |
| `.codePointAt(i)` | full code point (emoji-safe) | `"😀".codePointAt(0)` | `128512` |

**Out-of-range difference:** `"abc".charAt(99)` → `''` (empty string) but `"abc".at(99)` → `undefined`.

---

## 2. Searching

| Method | Returns | Example | Result |
| ----- | ----- | ----- | ----- |
| `.indexOf(sub, from?)` | first index, `-1` if absent | `"Login Successful".indexOf("Success")` | `6` |
| `.lastIndexOf(sub, from?)` | last index | `"a-b-a".lastIndexOf("a")` | `4` |
| `.includes(sub, pos?)` | `true` / `false` | `"Login Successful".includes("Login")` | `true` |
| `.startsWith(sub, pos?)` | `true` / `false` | `"https://qa.com".startsWith("https")` | `true` |
| `.endsWith(sub, len?)` | `true` / `false` | `"report.pdf".endsWith(".pdf")` | `true` |
| `.search(regex)` | index of first regex match, `-1` if none | `"Order #10245".search(/\d+/)` | `7` |
| `.match(regex)` | array of matches, or `null` | `"Order #10245".match(/#(\d+)/)` | `['#10245','10245']` |
| `.matchAll(regex)` | iterator of all matches (needs `/g`) | `[..."a1b2".matchAll(/([a-z])(\d)/g)].map(m => m[0])` | `['a1','b2']` |

⚠️ **All of these are case-sensitive.** `"Login Successful".includes("login")` → `false`. Lowercase both sides before comparing UI text.

⚠️ `.match()` returns `null` on no match — `"abc".match(/\d/)?.[0]` avoids the `TypeError`.

⚠️ `.match(/\d/g)` with the global flag returns only full matches, no capture groups: `"a1b2c3".match(/\d/g)` → `['1','2','3']`.

---

## 3. Extracting Substrings

| Method | Negative index? | Swaps args? | Example | Result |
| ----- | ----- | ----- | ----- | ----- |
| `.slice(start, end?)` | ✅ counts from end | ❌ returns `''` | `"JavaScript".slice(-6)` | `'Script'` |
| `.substring(start, end?)` | ❌ clamps to `0` | ✅ auto-swaps | `"JavaScript".substring(-6)` | `'JavaScript'` |
| `.substr(start, length)` | ✅ | — | `"JavaScript".substr(4, 6)` | `'Script'` (**deprecated**) |

```js
"JavaScript".slice(0, 4);       // 'Java'
"JavaScript".slice(4, 0);       // ''          ← end < start
"JavaScript".substring(4, 0);   // 'Java'      ← args swapped silently
```

**Use `slice()` by default.** It's the only one with predictable negative-index behaviour.

---

## 4. Splitting & Joining

| Call | Result | Note |
| ----- | ----- | ----- |
| `"a,b,c".split(",")` | `['a', 'b', 'c']` | split on separator |
| `"a,b,c".split(",", 2)` | `['a', 'b']` | `limit` argument |
| `"abc".split("")` | `['a', 'b', 'c']` | split every character |
| `"abc".split()` | `['abc']` | no separator = whole string |
| `"a1b22c".split(/\d+/)` | `['a', 'b', 'c']` | regex separator |
| `"a1b2".split(/(\d)/)` | `['a','1','b','2','']` | capture group is kept |
| `[..."hey"]` | `['h','e','y']` | emoji-safe, unlike `split("")` |
| `Array.from("hey")` | `['h','e','y']` | same result, clearer intent |
| `["a","b"].join(" \| ")` | `'a \| b'` | join array into string |
| `"abc".split("").reverse().join("")` | `'cba'` | reverse a string |

⚠️ `"😀".split("")` breaks the emoji into two broken halves. Use `[..."😀"]` → `['😀']`.

---

## 5. Case & Whitespace

| Method | Example | Result |
| ----- | ----- | ----- |
| `.toUpperCase()` | `"qa".toUpperCase()` | `'QA'` |
| `.toLowerCase()` | `"QA".toLowerCase()` | `'qa'` |
| `.toLocaleUpperCase(locale)` | `"i".toLocaleUpperCase("tr-TR")` | `'İ'` (vs `'I'`) |
| `.toLocaleLowerCase(locale)` | locale-aware lowercase | — |
| `.trim()` | `" QA ".trim()` | `'QA'` |
| `.trimStart()` | `" QA ".trimStart()` | `'QA '` |
| `.trimEnd()` | `" QA ".trimEnd()` | `' QA'` |

`trimLeft` / `trimRight` are legacy aliases — use `trimStart` / `trimEnd`.

---

## 6. Padding, Repeating, Concatenating

| Method | Example | Result | Use case |
| ----- | ----- | ----- | ----- |
| `.padStart(n, fill)` | `"7".padStart(3, "0")` | `'007'` | zero-pad IDs |
| `.padEnd(n, fill)` | `"Name".padEnd(10, ".")` | `'Name......'` | align console output |
| `.padStart(n, fill)` | `"abcdef".padStart(3, "0")` | `'abcdef'` | no-op if already long enough |
| `.repeat(n)` | `"ab".repeat(3)` | `'ababab'` | repeat text |
| `.repeat(0)` | `"ab".repeat(0)` | `''` | empty string |
| `.concat(b, c)` | `"a".concat("b", "c")` | `'abc'` | `+` is clearer |

---

## 7. Replacing

| Method | Replaces | Example | Result |
| ----- | ----- | ----- | ----- |
| `.replace(str, new)` | **first** occurrence only | `"banana".replace("a","X")` | `'bXnana'` |
| `.replace(/re/g, new)` | all (with `g` flag) | `"banana".replace(/a/g,"X")` | `'bXnXnX'` |
| `.replaceAll(str, new)` | all occurrences | `"banana".replaceAll("a","X")` | `'bXnXnX'` |

### Replacement Patterns

| Pattern | Call | Result |
| ----- | ----- | ----- |
| whole match | `"abc".replace(/b/, "[$&]")` | `'a[b]c'` |
| capture groups | `"2026-07-25".replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1")` | `'25/07/2026'` |
| function replacer | `"a1b2".replace(/\d/g, d => d * 2)` | `'a2b4'` |

⚠️ `.replaceAll()` with a **regex** requires the `g` flag or it throws a `TypeError`.

---

## 8. Comparing & Sorting

| Expression | Result | Note |
| ----- | ----- | ----- |
| `"abc" === "abc"` | `true` | strict equality |
| `"a" < "b"` | `true` | lexicographic |
| `"10" < "9"` | `true` | lexicographic, **not numeric!** |
| `["b","a","C"].sort()` | `['C','a','b']` | uppercase sorts first (code units) |
| `["b","a","C"].sort((x, y) => x.localeCompare(y))` | `['a','b','C']` | locale-aware order |
| `"a".localeCompare("b")` | `-1` | negative = before, `0` = equal, positive = after |
| numeric sort | `["item10","item9"].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))` | `['item9','item10']` |
| case-insensitive equality | `"ABC".localeCompare("abc", undefined, { sensitivity: "base" })` | `0` |

`.normalize("NFC")` fixes accented characters that look identical but differ in bytes — worth adding before comparing text scraped from different sources.

---

## 9. Template Literals

| Feature | Example | Result |
| ----- | ----- | ----- |
| interpolation | `` `User ${name} ran ${count} test${count > 1 ? "s" : ""}` `` | `'User Pramod ran 3 tests'` |
| multi-line | `` `line1\nline2` `` | preserves the newline |

### Tagged Template

```js
function tag(strings, ...vals) { return strings.raw.join("|") + " :: " + vals.join(","); }
tag`a${1}b${2}c`;          // 'a|b|c :: 1,2'
```

---

## 10. Static Methods & Conversions

| Call | Purpose | Result |
| ----- | ----- | ----- |
| `String.fromCharCode(72, 105)` | code units → string | `'Hi'` |
| `String.fromCodePoint(128512)` | code point → string | `'😀'` |
| `String.raw\`C:\new\test\`` | ignore escape sequences | `'C:\\new\\test'` |
| `String(123)` | any value → string | `'123'` |
| `(255).toString(16)` | number → base-N string | `'ff'` |

### String → Number

| Call | Result | Note |
| ----- | ----- | ----- |
| `Number("12")` | `12` | — |
| `Number("12px")` | `NaN` | strict |
| `Number("")` | `0` | watch out |
| `parseInt("12px", 10)` | `12` | stops at first invalid char |
| `parseFloat("12.5px")` | `12.5` | — |
| `+"42"` | `42` | unary plus, same rules as `Number()` |

⚠️ `"5" + 3` → `'53'` (concatenation) but `"5" - 3` → `2`. Only `+` is overloaded.

---

## 11. Rarely Needed

| Method | Note |
| ----- | ----- |
| `.isWellFormed()` | `false` if the string has lone surrogates |
| `.toWellFormed()` | replaces lone surrogates with `�` |
| `.normalize(form)` | Unicode normalization: `NFC`, `NFD`, `NFKC`, `NFKD` |
| `.valueOf()` / `.toString()` | returns the primitive value |
| `.anchor()`, `.big()`, `.blink()`, `.bold()`, `.fixed()`, `.fontcolor()`, `.fontsize()`, `.italics()`, `.link()`, `.small()`, `.strike()`, `.sub()`, `.sup()` | legacy HTML wrappers — **never use these** |

---

## 12. SDET Recipes

| Recipe | Function | Example | Result |
| ----- | ----- | ----- | ----- |
| Normalize UI text before asserting (kills stray `\n` and double spaces) | `s => s.replace(/\s+/g, " ").trim().toLowerCase()` | `"  LOGIN   Successful\n"` | `'login successful'` |
| Currency string → number | `s => parseFloat(s.replace(/[^0-9.]/g, ""))` | `"₹1,299.50"` | `1299.5` |
| Extract an ID from a URL | `s => s.match(/\/order\/(\d+)/)[1]` | `"https://shop.com/order/10245?ref=x"` | `'10245'` |
| Extract the first number from any label | `s => s.match(/\d+/)[0]` | `"Order #10245"` | `'10245'` |
| Validate a format | `s => /^\d{4}-\d{2}-\d{2}$/.test(s)` | `"2026-07-25"` | `true` |
| Mask sensitive test data in logs | `s => s.slice(0, 2) + "*".repeat(Math.max(0, s.length - 4)) + s.slice(-2)` | `"4111111111111111"` | `'41************11'` |
| Slug for screenshot / test-artifact filenames | `s => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")` | `"  Add to Cart! Test #3 "` | `'add-to-cart-test-3'` |
| Truncate long failure messages | `(s, n) => s.length > n ? s.slice(0, n - 1) + "…" : s` | `"Element not visible on page", 15` | `'Element not vi…'` |
| Clean a CSV-ish row | `s => s.split(",").map(x => x.trim())` | `"a, b ,c"` | `['a', 'b', 'c']` |
| Count occurrences | `s => (s.match(/a/g) \|\| []).length` | `"a-b-a-c"` | `2` |
| Title case | `s => s.replace(/\b\w/g, c => c.toUpperCase())` | `"login page"` | `'Login Page'` |

---

## Gotcha Summary

| Trap | Reality |
| ----- | ----- |
| `s[0] = "z"` | silently does nothing — strings are immutable |
| `.replace("a", "X")` | first match only; use `replaceAll` or `/g` |
| `.includes("Login")` | case-sensitive |
| `.substring(-6)` | clamps to `0`; use `.slice(-6)` |
| `"10" < "9"` | `true` — string comparison, not numeric |
| `["b","a","C"].sort()` | `['C','a','b']` — use `localeCompare` |
| `.match(/x/)` with no match | returns `null`, not `[]` |
| `Number("12px")` | `NaN`; use `parseInt` |
| `Number("")` | `0`, not `NaN` |
| `"5" + 3` | `'53'`; every other operator coerces to number |
| `.split("")` on emoji | splits the surrogate pair; use `[...str]` |
| `.charAt(99)` vs `.at(99)` | `''` vs `undefined` |

---

_All snippets in this cheatsheet were executed on Node.js v22 and the outputs pasted verbatim._
