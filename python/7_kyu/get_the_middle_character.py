# Get the Middle Character
# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python

def get_middle(s):
    # check if the length of the word is even or odd
    s = list(s)
    print(s)
    even_or_odd = "Even" if len(s) % 2 == 0 else "Odd"
    
    # Create a empyt list variable
    ans = []

    # conditional statement depending on even or odd
    if even_or_odd == "Even":
        ans.append(s[(len(s) // 2) - 1])
        ans.append(s[len(s) // 2])
    else:
        ans.append(s[(len(s) // 2)])
    
    # join the list ans
    return "".join(ans)

print(get_middle("test"))
print(get_middle("testing"))