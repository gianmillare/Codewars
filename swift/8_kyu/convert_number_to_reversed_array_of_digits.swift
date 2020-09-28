// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/swift

func digitize(_ num: Int) -> [Int] {
    let digits = String(num)
    let ans = digits.compactMap{ $0.wholeNumberValue }
    return ans.reversed()
}

print(digitize(23582357))
print(digitize(45762893920))
print(digitize(548702838394))