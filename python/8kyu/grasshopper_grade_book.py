def get_grade(x, y, z):
  avg = (x + y + z)/3

  if 90 <= avg <= 100:
    return "A"
  elif 80 <= avg < 90:
    return "B"
  elif 70 <= avg < 80:
    return "C"
  elif 60 <= avg < 70:
    return "D"
  else:
    return "F"


x = 100
y = 85
z = 96
get_grade(x, y, z)

# # Best Solution
# def get_grade(s1, s2, s3):
#     mean = sum([s1,s2,s3])/3
#     if mean>=90: return 'A'
#     if mean>=80: return 'B'
#     if mean>=70: return 'C'
#     if mean>=60: return 'D'
#     return 'F'