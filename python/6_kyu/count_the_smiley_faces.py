# Count the smiley faces!
# https://www.codewars.com/kata/583203e6eb35d7980400002a/train/python

def count_smileys(arr):
    count = 0
    face = {0: [":", ";"], 1: ["-", "~"], 2: [")", "D"]}

    for i in arr:
        if len(i) == 2:
            if i[0] in face[0] and i[-1] in face[2]:
                count += 1
        if len(i) == 3:
            if i[0] in face[0] and i[1] in face[1] and i[2] in face[2]:
                count += 1

    return count

print(count_smileys([':D',':~)',';~D',':)']))
print(count_smileys([':)',':(',':D',':O',':;']))
print(count_smileys([';]', ':[', ';*', ':$', ';-D']))