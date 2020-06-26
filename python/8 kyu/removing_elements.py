def remove_every_other(n):
  new_list = []
  for i in range(0, len(n)):
    if i % 2 == 0:
      new_list.append(n[i])
  print(new_list)

n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
remove_every_other(n)

# Best Solution
# def remove_every_other(x):
#   return my_list[::2]