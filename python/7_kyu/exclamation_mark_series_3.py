# Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
# https://www.codewars.com/kata/57faefc42b531482d5000123/train/python

def remove(s):
  list_s = list(s)
  arr = []
  arr_epoint = []

  for i in list_s:
    if i != "!":
      arr.append(i)
  
  for i in list_s[::-1]:
    if i == "!":
      arr_epoint.append(i)
    else:
      break

  return ''.join(arr) + ''.join(arr_epoint)

# # Best Solution
# def remove(s):
#     return s.replace('!', '')+ '!'*(len(s)- len(s.rstrip('!')))

print(remove("!Hi!"))