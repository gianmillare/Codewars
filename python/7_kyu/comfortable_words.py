# Comfortable words
# https://www.codewars.com/kata/56684677dc75e3de2500002b/train/python

def comfortable_word(word):
    hands = {
        'left': ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'],
        'right': ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']
    }
    
    ans = True
    left = hands['left']
    right = hands['right']
    
    if word[0] in hands['left']:
        next = left
    else:
        next = right
    
    for i in word:
        if i in next:
            ans = True
        else:
            ans = False
            break
        
        if next == left:
            next = right
        else:
            next = left
    
    return ans