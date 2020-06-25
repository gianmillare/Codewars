# Coefficients of the Quadratic Equation
# https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/python

def quadratic(x1, x2):
    a = 1
    b = (x2*-1) + (x1*-1)
    c = x1*x2
    return (a, b, c)

quadratic(-3, 4)

# # Best Solution
# def quadratic(x1, x2):
#     return (1, -(x1 + x2), x1 * x2)