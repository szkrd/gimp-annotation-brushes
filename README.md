# Gimp brush generator

I couldn't find a good annotation tool for linux, so I decided to generate some annotation brushes for Gimp.

To make life easier the generated `png` and `gbr` files are included in the project.

## Usage

1. edit [config](./config.json) file
2. `npm i`
3. `npm start`
4. open Gimp, use [this script](https://www.xresch.com/gimp-convert-pngs-to-brushes-552) after modifying the `source_folder` and `dest_folder` part via **filters/python-fu/console**:

```python
from gimpfu import *
import os

def convert_png_to_gbr():
    source_folder = "/home/USERNAME/temp/gimp-annotation-brushes/output"
    dest_folder = "/home/USERNAME/temp/gimp-annotation-brushes/gbr"
    for filename in os.listdir(source_folder):
        img = pdb.gimp_file_load(source_folder+"/"+filename,filename)
        pdb.file_gbr_save(img, img.layers[0], dest_folder +"/"+ filename+".gbr", filename, 100, filename)

convert_png_to_gbr()
```

When you have the `gbr` files ready, righ click inside gimp's brush palette, select
**Show in File Manager**, drag/copy the gbr files to the directory and then right
click and select **Refresh Brushes**.

## Example pngs

![](./docs/black_01.png)
![](./docs/black_02.png)
![](./docs/black_03.png)
![](./docs/black_04.png)
![](./docs/black_05.png)
![](./docs/black_06.png)
![](./docs/black_07.png)
![](./docs/black_08.png)
![](./docs/black_09.png)
![](./docs/black_10.png)
![](./docs/black_11.png)
![](./docs/checkmark.png)
![](./docs/cross.png)
![](./docs/green_downwards_arrow.png)
![](./docs/green_leftwards_arrow.png)
![](./docs/green_north_east_arrow.png)
![](./docs/green_north_west_arrow.png)
![](./docs/green_south_east_arrow.png)
![](./docs/green_south_west_arrow.png)
![](./docs/green_upwards_arrow.png)
![](./docs/orange_downwards_arrow.png)
![](./docs/orange_leftwards_arrow.png)
![](./docs/orange_north_east_arrow.png)
![](./docs/orange_north_west_arrow.png)
![](./docs/orange_rightwards_arrow.png)
![](./docs/orange_south_east_arrow.png)
![](./docs/orange_south_west_arrow.png)
![](./docs/orange_upwards_arrow.png)
![](./docs/red_downwards_arrow.png)
![](./docs/red_leftwards_arrow.png)
![](./docs/red_north_east_arrow.png)
![](./docs/red_north_west_arrow.png)
![](./docs/red_rightwards_arrow.png)
![](./docs/red_south_east_arrow.png)
![](./docs/red_south_west_arrow.png)
![](./docs/red_upwards_arrow.png)
