# Your Order, Please
# https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/python

def order(sentence):
    sentence = sentence.split(" ")
    ans = []
    
    for i in range(1, len(sentence) + 1):
        for j in sentence:
            if str(i) in j:
                ans.append(j)
    
    return " ".join(ans)


print(order("4of Fo1r pe6ople g3ood th5e the2"))