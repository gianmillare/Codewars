# Homogenous arrays
# https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/python

def filter_homogenous(arrays):
  ans = []
  
  for i in arrays:
    if len(i) >= 1:
      char_type = type(i[0])
    
      for j in i:
        match = True
        if type(j) != char_type:
          match = False
          break
    
      if match:
        ans.append(i)
  
  return ans
    


print(filter_homogenous([[935, 768, 661, 'mhas', 'eopa', 945, 381], ['ylkn', 'eauj', 'msdj', 'dqrq', 'psag', 'rynt', 'lebs'], [358, 239, 165, 724, 820], [479, 673, 61, 347, 211, 552, 882, 879], [451, 'bnyg', 116, '', 560, 214, 599], [777, 'abxt', 921, 96, 958, 647], ['efmm', 672, 472, '', 'dalc'], ['rpel', 586, 'obxh', 336, 330, 93, 'fdov'], [663, 534, '', 615], ['xvsl', 'kfzv'], ['yjif', 'vaid', 'qjju', '', 'twlz', 'ywxa', 'patp', 'xdrf', 'lbng'], [244, 993, 966, 338, 876, 904, 324]]))