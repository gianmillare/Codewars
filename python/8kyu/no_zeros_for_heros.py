def no_boring_zeros(n):
  if len(str(n)) == 1:
    return n
  else:
    n = list(str(n))[::-1]

    if n[-1] == '-':
      neg_sign = n.pop(-1)
    else:
      neg_sign = ''
    
    n = int(''.join(n))
    n = list(str(n))[::-1]


    z = n.insert(0, neg_sign)

    z = int(''.join(n))
    print(z)



n = -1050   
no_boring_zeros(n)   
