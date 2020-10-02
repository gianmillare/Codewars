# Convert String to Camel Case
# https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python


import re

def to_camel_case(text):
  if "-" in text or "_" in text:
    text = re.split('-|_', text)
  else:
    return ''
  
  ans = [text[0]]

  for i in range(1, len(text)):
    ans.append(text[i][0].upper() + text[i][1:])
  
  return "".join(ans)
print(to_camel_case(''))
print(to_camel_case('the_stealth_warrior'))
print(to_camel_case('The-Stealth-Warrior'))
print(to_camel_case('A-B-C'))