def difference_in_ages(ages):
    result = []
    result.append(min(ages))
    result.append(max(ages))
    result.append(max(ages)-min(ages))
    
    return tuple(result)