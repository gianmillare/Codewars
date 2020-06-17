def guess_blue(b, r, bpulled, rpulled):
  bleft = b-bpulled
  rleft = r-rpulled

  total_left = bleft + rleft

  print(float(bleft / total_left))



a = 5
b = 5
c = 2
d = 3
guess_blue(a, b, c, d)