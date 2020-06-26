# Convert number to reversed array of digits
# https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/python

def digitize(n):
  result = [int(i) for i in str(n)]
  return result[::-1]

n = 348597 
digitize(n)

# # Best Solution
# def digitize(n):
#     return map(int, str(n)[::-1])