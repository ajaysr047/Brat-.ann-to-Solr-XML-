import xml.etree.cElementTree as etree
from lxml import etree


# add = etree.Element("add")
# doc = etree.SubElement(add, "doc")

# etree.SubElement(doc, "field", name="blah").text = "some value1"
# etree.SubElement(doc, "field", name="asdfasd").text = "some vlaue2"

# tree = etree.ElementTree(add)
# tree.write("filename.xml", pretty_print=True)

def compareTag(num,val):
    add = etree.Element("add")
    
    f = open('bhagavad_gita/verse'+num+'.ann','r')
    i = val
    for line in f:
        word = list(line.split('\t'))
        # print(word[1].split(' ')[0]+' '+ word[2])
        doc = etree.SubElement(add, "doc")
        etree.SubElement(doc, "field", name="id").text =str(i) 
        etree.SubElement(doc, "field", name=word[1].split(' ')[0]).text = word[2].rstrip('\n')
        i = i + 1
    tree = etree.ElementTree(add)
    tree.write('verse'+num+'.xml', pretty_print=True, encoding="UTF-8")
    print(i)
    return i
number = list(range(1,4))
v = 1
for n in number:
    v = compareTag(str(n),v)

v = compareTag("4-6", v)

number = list(range(7,16))
# print(number)
for n in number:
    v = compareTag(str(n), v)

