def divide(weight):
    if weight > 2:
        return weight % 2 == 0
    else:
        return False

# Best Solution
def divide(weight):
  return weight > 2 and weight % 2 == 0