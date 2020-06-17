def index(array, n):
    if n <= len(array) - 1:
        return array[n]**n
    else:
        return -1
    

arr = [1, 2, 3]
n = 3
index(arr, n)