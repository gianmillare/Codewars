# Delete Occurrences of an Element... More than N Times
# https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python

def delete_nth(seq, n):
    ans = []

    for i in seq:
        if ans.count(i) < n:
            ans.append(i)
        else:
            continue
    
    return ans

print(delete_nth([20,37,20,21], 1))
print(delete_nth([1,1,3,3,7,2,2,2,2], 3))
print(delete_nth([1,1,1,1], 2))