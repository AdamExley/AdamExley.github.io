import os
import numpy as np
import cv2
from tqdm import tqdm

ASPECT_RATIO = 1

MAX_DIM = 300

def get_paths(dirname):
    IMG_EXTS = ['.jpg','.JPG','.jpeg','.JPEG','.png','.PNG']
    return [os.path.join(r,x) for r,d,y in os.walk(dirname) for x in y if np.any([x.endswith(j) for j in IMG_EXTS])]

def resize(paths):
    idx = 0

    for path in tqdm(paths):
        img = np.array(cv2.imread(path))

        scaler = min([MAX_DIM / x for x in img.shape[:2]])

        dim = tuple((np.array(img.shape[:2][::-1]) * scaler).astype(int))

        img = cv2.resize(img, dim, cv2.INTER_AREA)

        cv2.imwrite(f'use/{idx}.jpg',img)

        idx += 1
    

if __name__ == '__main__':
    img_paths = get_paths('source')
    resize(img_paths)

