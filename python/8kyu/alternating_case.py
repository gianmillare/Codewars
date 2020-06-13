def to_alternating_case(string):
    new_string = []
    for i in string:
        if i.isupper():
            new_string.append(i.lower())
        elif i.islower():
            new_string.append(i.upper())
        else:
            new_string.append(i)
    return ''.join(new_string)