def triple_trouble(one, two, three):
    x = []
    y = []
    z = []
    lis = []
    
    [x.append(i) for i in one]
    [y.append(i) for i in two]
    [z.append(i) for i in three]

    while x or y or z:
      lis.append(x.pop(0))
      lis.append(y.pop(0))
      lis.append(z.pop(0))
    
    print("".join(lis))
    


one = "LLh"
two = "euo"
three = "xtr"
triple_trouble(one, two, three)
    