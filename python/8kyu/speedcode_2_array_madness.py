def array_madness(a, b):
    x = []
    y = []

    for i in a:
        x.append(i ** 2)

    for i in b:
        y.append(i ** 3)

    return sum(x) > sum(y)

# best solution:
# return sum(i**2 for i in a) > sum(i**3 for i in b)