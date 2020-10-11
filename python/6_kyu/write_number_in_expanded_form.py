# Write Number in Expanded Form
# https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/python

# Solution 1: Iterate and Concatenate
def expanded_form(n):
    n = list(str(n))
    exp = []

    for i in range(0, len(n)):
        if n[i] != '0':
            zeroes = '0' * (len(n) - (i + 1))
            exp.append(n[i] + zeroes)
    
    return " + ".join(exp)

print(expanded_form(12))
print(expanded_form(42))
print(expanded_form(70304))