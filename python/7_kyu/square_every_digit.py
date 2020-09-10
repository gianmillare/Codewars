# Square Every Digit
# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

def square_digits(num):
    ans = []

    for i in list(str(num)):
        ans.append(str(int(i)**2))

    return int(''.join(ans))

print(square_digits(9119))