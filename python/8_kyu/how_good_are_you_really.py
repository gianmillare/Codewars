def better_than_average(class_points, your_points):
    class_points.append(your_points)
    avg = sum(class_points) / len(class_points)
    return your_points > avg