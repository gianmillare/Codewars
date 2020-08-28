# Every possible sum of two digits
# https://www.codewars.com/kata/5b4e474305f04bea11000148/train/python

def digits(num):
    num = list(str(num))
    arr = []
    
    for i in range(0, len(num)):
        for j in range(i + 1, len(num)):
            arr.append(int(num[i]) + int(num[j]))
    
    return arr
        

print(digits(12345))