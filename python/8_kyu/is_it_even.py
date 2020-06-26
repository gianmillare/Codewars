def is_even(n):
    if isinstance(n, float):
        return False
    else:
        return n % 2 == 0