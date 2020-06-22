def get_real_floor(n):
    if n < 0:
        return n
    elif n == 0:
        return 0
    elif n < 13:
        return n - 1
    elif n == 14:
        return 12
    else:
        return n - 2

# # Best Solution
# def get_real_floor(n):
#     if n <= 0: return n
#     if n < 13: return n-1
#     if n > 13: return n-2