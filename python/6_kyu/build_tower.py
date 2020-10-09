# Build Tower
# https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/python

# Solution 1: Concatenation
def tower_builder(n):
    if n == 1:
        return ['*']
    else:
        length = n + (n - 1)
        ans = []

        for star in range(1, length + 1, 2):
            spaces = length - star
            sep = ' ' * int(spaces / 2)
            stars = '*' * star
            ans.append(sep + stars + sep)

        return ans

print(tower_builder(1))
print(tower_builder(2))
print(tower_builder(3))
