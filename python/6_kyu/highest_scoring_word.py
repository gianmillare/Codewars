# Highest Scoring Word
# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python

def make_scorecard():
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    point, points = 1, {}

    for i in alpha:
        points[i] = point
        point += 1
    
    return points

def high(x):
    scorecard = make_scorecard()
    contestants = x.split(" ")

    scores = {}

    for i in contestants:
        count = 0
        
        for j in i:
            count += scorecard[j]
        
        scores[i] = count
    
    return scores

    

print(high("man i need a taxi up to ubud"))
print(high("what time are we climbing up the volcano"))
print(high("take me to semynak"))