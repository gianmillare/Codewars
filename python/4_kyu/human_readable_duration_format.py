# Human Readable Duration Format
# https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/python

def format_duration(time):
    # if the time is equal to zero, return now
    if time == 0:
        return "now"
    


print(format_duration(1))
print(format_duration(62))
print(format_duration(120))
print(format_duration(3600))
print(format_duration(3662))