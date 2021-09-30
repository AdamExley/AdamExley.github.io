import os
import random
from build import get_paths, MAX_DIM


img_paths = get_paths('use')


with open('index.html','w') as outfile:
    with open('html_template/before.html','r') as b:
        outfile.write(b.read())
    
    img_includes = [f'<img src="{path}" style="max-width:{MAX_DIM}px; ">\n' for path in img_paths]
    random.shuffle(img_includes)
    outfile.writelines(img_includes)

    with open('html_template/after.html','r') as a:
        outfile.write(a.read())
