def derive(coefficient, exponent):
  product = coefficient*exponent
  char = "x^"
  exp_sub = exponent - 1

  return str(product) + char + str(exp_sub)

x = 7
y = 8
derive(x, y)
