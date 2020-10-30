# Human Readable Duration Format
# https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/python

formatted {
    "year": 0,
    "day": 0,
    "hour": 0,
    "minute": 0,
    "second": 0
}

year_sec, day_sec, hour_sec, min_sec = 31536000, 86400, 3600, 60

def format_duration(t):
    return t

print(format_duration(0))
print(format_duration(1))
print(format_duration(62))
print(format_duration(120))
print(format_duration(3600))
print(format_duration(3662))
print(format_duration(86404))
print(format_duration(31536003))