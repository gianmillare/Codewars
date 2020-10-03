# Detect Pangram
# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

def is_pangram(text):
    alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ")

    text = [i.lower() for i in text if i.isalpha()]

    for i in text:
        if i in alpha:
            alpha.remove(i)
    
    return len(alpha) == 0

print(is_pangram("The quick, brown fox jumps over the lazy dog"))
print(is_pangram("This is not a pangram!"))