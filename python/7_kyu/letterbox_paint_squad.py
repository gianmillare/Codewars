# Letterbox Paint-Squad
# https://www.codewars.com/kata/597d75744f4190857a00008d/train/python

def paint_letterboxes(start, finish):
    number_dic = {}
    arr = []

    for i in range(start, finish + 1):
        splitting = list(str(i))
        for j in splitting:
            arr.append(j)

    for i in arr:
        if int(i) in number_dic:
            number_dic[int(i)] += 1
        else:
            number_dic[int(i)] = 1

    ans = []

    for i in range(0, 10):
        if i in number_dic:
            ans.append(number_dic[i])
        else:
            ans.append(0)

    return ans




print(paint_letterboxes(125, 132))