# Debugging practice
def find_longest(string):
  lis = string.split(" ")
  len_lis = []
  
  for i in lis:
    len_lis.append(len(i))
  
  print(max(len_lis))

n = "The quick white fox jumped around the massive dog"
find_longest(n)