def reverse_words(s):
res=[]
for word in s.split(" "):
res.append(word)

return " ".join(res[::-1]);