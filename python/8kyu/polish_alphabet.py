def correct_polish_letters(st):
    new_string = []
    dict = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    }

    for i in st:
        if i in dict:
            new_string.append(dict[i])
        else:
            new_string.append(i)

    new_string = ''.join(new_string)
    print(new_string)

x = "Jędrzej Błądziński"
correct_polish_letters(x)