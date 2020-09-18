# Duplicate Encoder
# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

# Solution 1
def duplicate_encode(word):
  word = word.lower()
  ans = []

  for i in word:
    if word.count(i) > 1:
      ans.append(")")
    else:
      ans.append("(")

  return ''.join(ans)

# Solution 2: More Pythonic
def duplicate_encode(word):
  word = word.lower()
  return ''.join([")" if word.count(i) > 1 else "(" for i in word])

print(duplicate_encode("Success"))