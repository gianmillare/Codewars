# Indexed capitalization
# https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/python

def capitalize(s, ind):
    lis = list(s)
    results = []
    for i in range(0, len(lis)):
        if i in ind:
            results.append(lis[i].upper())
        else:
            results.append(lis[i])

    return ''.join(results)