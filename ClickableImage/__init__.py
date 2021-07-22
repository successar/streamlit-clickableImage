import os
import streamlit.components.v1 as components
from PIL import Image
import numpy as np

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = True

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.

if not _RELEASE:
    ClickableImage = components.declare_component(
        "ClickableImage",
        url="http://localhost:3001",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    ClickableImage = components.declare_component("ClickableImage", path=build_dir)


# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run my_component/__init__.py`
if not _RELEASE:
    import streamlit as st
    np.random.seed(1000)
    im_arr = np.random.randint(250, 255, size=(100, 1000))
    im = Image.fromarray(np.uint8(im_arr), "L")

    import base64
    from io import BytesIO

    buffered = BytesIO()
    im.save(buffered, format="PNG")
    img_str = "data:image/png;base64," + base64.b64encode(buffered.getvalue()).decode("ascii")

    val = ClickableImage(
        src=img_str,
        row_left_beams=[[10, 20], [80, 90]],
        col_top_beams=[[50, 70], [300, 500], [900, 950]],
        row_right_beams=[[15, 25], [87, 97]],
        col_bottom_beams=[[320, 520], [700, 710]],
        width=1000,
        height=100,
    )

    st.write(val)
