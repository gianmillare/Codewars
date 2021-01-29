# Valid Phone Number
# https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/python

def validPhoneNumber(s):
    s = list(s)
    if len(s) == 14:
        if s[0] == "(" and s[4] == ")" and s[5] == " " and s[9] == "-":
            digit_index = [1, 2, 3, 6, 7, 8, 10, 11, 12, 13]
            for i in range(len(s)):
                if i in digit_index:
                    if s[i].isdigit():
                        return True
                    else:
                        return False
        else:
            return False
    else:
        return False

print(validPhoneNumber("(123) 456-7890"))
print(validPhoneNumber("(1111)555 2345"))
print(validPhoneNumber("(098) 123 4567"))