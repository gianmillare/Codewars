# Split In Parts
# https://www.codewars.com/kata/5650ab06d11d675371000003/train/python

def split_in_parts(s, part_length): 
  ans = []
  for i in range(0, len(s), part_length):
      ans.append(s[i:i + part_length])
  return ' '.join(ans)

print(split_in_parts("supercalifragilisticexpialidocious", 3))