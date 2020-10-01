// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/swift

func firstNonConsecutive (_ arr: [Int]) -> Int? {
    var number = arr[0]

    for num in arr {
        if num == number {
            number += 1
        } else {
            return num
        }
    }

    return nil
}

print(firstNonConsecutive([1,2,3,4,6,7,8]))