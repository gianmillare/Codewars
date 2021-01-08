# The Hashtag Generator
# https://www.codewars.com/kata/52449b062fb80683ec000024/train/python

# Here's the deal:
    # It must start with a hashtag (#).
    # All words must have their first letter capitalized.
    # If the final result is longer than 140 chars it must return false.
    # If the input or the result is an empty string it must return false.

def generate_hashtag(s):
    # Complete the first contingency
    if len(s) == 0:
        return False

    # remove the trailinh and preceding spaces and change string to list
    s = list(s.strip())
    
    # create an empty array to hold the final result, preceded with a hashtag
    ans = ["#"]

    # loop through the string array, set a variable 'space' to true, and capitalize the letter if space is true
    space = True
    for i in s:
        if i != " ":
            if space:
                ans.append(i.upper())
                space = False
            else:
                if i.isupper():
                    ans.append(i.lower())
                else:
                    ans.append(i)
        else:
            space = True
    
    ans = "".join(ans)

    if len(ans) >= 140:
        return False
    
    return ans


print(generate_hashtag(""))
print(generate_hashtag("Codewars"))
print(generate_hashtag("Codewars Is Nice"))
print(generate_hashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong"))