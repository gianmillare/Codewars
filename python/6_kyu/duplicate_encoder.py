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

print(duplicate_encode("Success"))