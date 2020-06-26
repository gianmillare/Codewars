# 1000 milliseconds in 1s
# 60s in 1m --> 60,000 milliseconds in 1m
# 60m in 1h --> 60,000x60 --> 3,600,000 milliseconds in 1h

def past(h, m, s):
    return (h*3600000) + (m*60000) + (s*1000)