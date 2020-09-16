# Stop gninnipS My sdroW!
# https://www.codewars.com/kata/5264d2b162488dc400000001/train/python

def spin_words(sentence):
  ans = []

  for i in sentence.split(" "):
    if len(i) >= 5:
      ans.append(i[::-1])
    else:
      ans.append(i)
  
  return " ".join(ans)

# # Alternative Solution: Python one-liner
# def spin_words(sentence):
#     return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])


print(spin_words("Hey fellow warriors"))
print(spin_words("This is another test"))