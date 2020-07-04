# makeAcronym
# https://www.codewars.com/kata/557efeb04effce569d000022/train/python

def make_acronym(phrase):
    if phrase == '':
        return phrase
    elif isinstance(phrase, str):
        phrase = phrase.split(" ")
        
        for i in phrase:
            if not i.isalpha():
                return "Not letters"

        ans = []

        for i in phrase:
            ans.append(i[0].upper())
        
        return ''.join(ans)
    else:
        return "Not a string"