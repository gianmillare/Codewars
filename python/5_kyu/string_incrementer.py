# String incrementer
# https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/python

# Rules:
# 1. if the string is empty, return 1
# 2. if the string does not end with a number, append 1 and return the new string
# 3. if the string ends with a number, incrememt the number by 1

def increment_string(s):
    
    # Rule 1
    if len(s) == 0:
        return "1"
    
    # Rule 2
    s = list(s)
    if s[-1].isalpha():
        s.append("1")
        return "".join(s)
    
    # Rule 3
    reversal = [i for i in reversed(s)]
    ans, ind = [], 0

    # reverse the string, and create find the index where the integers start
    for i in range(len(reversal)):
        if reversal[i].isdigit():
            ind += 1
        else:
            break
    
    start_inc = len(s) - ind

    # using start_inc, remove the values from s, and create a new array using the removed values
    replaced_values = list(str(int("".join(s[start_inc:])) + 1))

    while ind > len(replaced_values):
        replaced_values.insert(0, "0")
    
    ans = s[:start_inc] + replaced_values

    return "".join(ans)

# print(increment_string("foo"))
print(increment_string("foobar001"))
# print(increment_string("foobar99"))
# print(increment_string("foobar099"))
# print(increment_string(""))
print(increment_string("1s]X>016507.Wiw=T3y67581487bNqji_*C8190579O RA7663Z2Qi~O896nU~/489027691861674357bcT304345054"))