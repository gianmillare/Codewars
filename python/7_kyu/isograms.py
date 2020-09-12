# Isograms
# https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/python

def is_isogram(s):
    letters = []

    for i in list(s.lower()):
        if i not in letters:
            letters.append(i)
        else:
            return False
    
    return True
    

print(is_isogram("Dermatoglyphics"))
print(is_isogram("isIsogram"))