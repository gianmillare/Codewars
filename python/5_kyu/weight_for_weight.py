# Weight for Weight
# https://www.codewars.com/kata/55c6126177c9441a570000cc/train/python

def order_weight(list_of_weights):
  list_of_weights = [i for i in list_of_weights.split(" ")]
  weighted = {}
  
  for i in list_of_weights:
    digits = [int(j) for j in list(i)]
    position = sum(digits)
    weighted[position] = i

  weighted_sorted_keys = sorted(weighted)

  res = []

  for i in weighted_sorted_keys:
    res.append(weighted[i])
  
  return " ".join(res)



    

print(order_weight("103 123 4444 99 2000"))
print( order_weight("2000 10003 1234000 44444444 9999 11 11 22 123"))