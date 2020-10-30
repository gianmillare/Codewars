# Human Readable Duration Format
# https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/python

year_sec, day_sec, hour_sec, min_sec = 31536000, 86400, 3600, 60

def human_format(lang):
    results = []

    for key in lang:
        if lang[key] > 0:
            if lang[key] == 1:
                results.append(str(lang[key]) + " " + key)
            if lang[key] > 1:
                results.append(str(lang[key]) + " " + key + "s")
    
    return results


def format_duration(t):
    formatted = {
        "year": 0,
        "day": 0,
        "hour": 0,
        "minute": 0,
        "second": 0
    }
    if t == 0:
        return "now"

    while t:
        if t >= year_sec:
            formatted["year"] = int(t / year_sec)
            t = t - (year_sec * formatted["year"])
        
        if day_sec <= t < year_sec:
            formatted["day"] = int(t / day_sec)
            t = t - (day_sec * formatted["day"])
        
        if hour_sec <= t < day_sec:
            formatted["hour"] = int(t / hour_sec)
            t = t - (hour_sec * formatted["hour"])
        
        if min_sec <= t < hour_sec:
            formatted["minute"] = int(t / min_sec)
            t = t - (min_sec * formatted["minute"])
        
        if t < 60:
            formatted["second"] = t
            t = 0
    
    ans = human_format(formatted)
    
    return ", ".join(ans)
    
print(format_duration(0))
print(format_duration(1))
print(format_duration(62))
print(format_duration(120))
print(format_duration(3600))
print(format_duration(3662))
print(format_duration(86404))
print(format_duration(31536003))