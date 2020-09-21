# Replace With Alphabet Position
# https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(text):
  letters = "abcdefghijklmnopqrstuvwxyz"
  alpha = {}
  ans = []

  for i in range(0, len(letters)):
    alpha[letters[i]] = i + 1
  
  for i in text:
    if i.lower() in alpha:
      ans.append(str(alpha[i.lower()]))

  return " ".join(ans)

print(alphabet_position("The sunset sets at twelve o' clock."))
print(alphabet_position("The narwhal bacons at midnight."))