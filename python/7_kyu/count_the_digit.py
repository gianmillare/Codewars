# Count the Digit
# https://www.codewars.com/kata/566fc12495810954b1000030/train/python

def nb_dig(n, d):
    lis = []
    for i in range(0, n+1):
        lis.append(str(i**2))
    
    string_lis = ''.join(lis)
    string_lis = list(string_lis)
    
    count = 0
    for i in string_lis:
        if i == str(d):
            count += 1
    
    return count