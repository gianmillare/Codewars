def first_non_consecutive(arr):
    if len(arr) == 0:
        return None
    elif len(arr) == 1:
        return None
    else:
        for i in range(0, len(arr)-1):
            if arr[i] - arr[i+1] != -1:
                return arr[i+1]
              