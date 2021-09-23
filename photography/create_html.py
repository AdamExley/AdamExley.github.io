import os
from build import get_paths


img_paths = get_paths('use')


with open('index.html','w') as outfile:
    with open('html_template/before.html','r') as b:
        outfile.write(b.read())
    
    img_includes = [f'<img src="{path}">\n' for path in img_paths]
    outfile.writelines(img_includes)

    with open('html_template/after.html','r') as a:
        outfile.write(a.read())
