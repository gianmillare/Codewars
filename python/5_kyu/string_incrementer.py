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





        # # append letters
        # if s[i].isalpha():
        #     ans.append(s[i])

        # elif s[i].isdigit():
        #     # gather the information of the numeric values, add 1 to the number
        #     values_length = len(s[i:])
        #     values = int("".join(s[i:])) + 1

        #     # change the int into a list of its digits
        #     value_back = list(str(values))

        #     # if the length of the values array does not match values_length, append 0 to the front until it does
        #     while values_length > len(value_back):
        #         value_back.insert(0, "0")
            
        #     # append the new array into answer array
        #     ans.append("".join(value_back))
    
        #     return "".join(ans)


# print(increment_string("foo"))
# print(increment_string("foobar001"))
# print(increment_string("foobar99"))
# print(increment_string("foobar099"))
# print(increment_string(""))
print(increment_string("1s]X>016507.Wiw=T3y67581487bNqji_*C8190579O RA7663Z2Qi~O896nU~/489027691861674357bcT304345054"))