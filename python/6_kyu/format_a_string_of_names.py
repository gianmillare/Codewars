# Format a string of names like 'Bart, Lisa & Maggie'.
# https://www.codewars.com/kata/53368a47e38700bd8300030d/train/python

def namelist(names):
    # if the list is empty, return an empty string
    if len(names) == 0:
        return ""

    # if the list is 1 name long, return that one name
    if len(names) == 1:
        return names[0]["name"]
    
    # if the list is 2 names long, return the two names separated by an "&"
    if len(names) == 2:
        return names[0]["name"] + " & " + names[1]["name"]

    # Create an empty array to hold the answers
    ans = []

    # if the list is 3 or more names long, append a comma at the end of every name, excluding last 2
    for i in range(0, len(names) - 2):
        ans.append(names[i]["name"] + ",")
    
    # the last two names of the list will be one string combined with an ampersand
    ans.append(names[-2]["name"] + " & " + names[-1]["name"])
    
    return " ".join(ans)


print(namelist([{'name': 'Bart'},{'name': 'Lisa'},{'name': 'Maggie'},{'name': 'Homer'},{'name': 'Marge'}]))
print(namelist([{'name': 'Bart'},{'name': 'Lisa'},{'name': 'Maggie'}]))
print(namelist([{'name': 'Bart'},{'name': 'Lisa'}]))
print(namelist([{'name': 'Bart'}]))
print(namelist([]))