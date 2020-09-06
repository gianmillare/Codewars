# Complementary DNA
# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python

def DNA_strand(dna):
    dna_seq = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    
    ans = []
    
    for i in dna:
        ans.append(dna_seq[i])
    
    return ''.join(ans)

print(DNA_strand('AAAA'))