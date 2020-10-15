# Valid Parentheses
# https://www.codewars.com/kata/52774a314c2333f0a7000688/train/python

# Solution 1: Incrementing Count
def valid_parentheses(s):
  paran = [i for i in s if i in [")", "("]]
  count = 0

  for i in paran:
    if i == "(":
      count += 1
    elif i == ")" and count == 0:
      return False
    elif i == ")" and count != 0:
      count -= 1
  
  return count == 0
  

print(valid_parentheses(")(()))")) # False
print(valid_parentheses("(())((()())())")) # True
print(valid_parentheses("hi())(")) # False
print(valid_parentheses("hi(hi)()")) # True