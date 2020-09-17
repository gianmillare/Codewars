# Who likes it?
# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

# Solution 1: Using f-string
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return names[0] + " likes this"
    elif len(names) == 2:
        return names[0] + " and " + names[1] + " like this"
    elif len(names) == 3:
        return (f"{names[0]}, {names[1]} and {names[2]} like this")
    else:
        return (f"{names[0]}, {names[1]} and {len(names) - 2} others like this")

# Solution 2: Using %
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return "%s likes this" % names[0]
    elif len(names) == 2:
        return "%s and %s like this" % (names[0], names[1])
    elif len(names) == 3:
        return "%s, %s and %s like this" % (names[0], names[1], names[2])
    else:
        return "%s, %s and %s others like this" % (names[0], names[1], len(names) - 2)