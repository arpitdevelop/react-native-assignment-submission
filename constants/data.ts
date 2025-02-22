import { type ImageSourcePropType } from "react-native";
import { type RelativePathString } from "expo-router";
import PythonGif from "../assets/gifs/python.gif";
import WebdevGif from "../assets/gifs/webdev.gif";

import HTML_LOGO from "../assets/images/tools icons/html.png";
import CSS_LOGO from "../assets/images/tools icons/css.png";
import TAILWIND_LOGO from "../assets/images/tools icons/tailwind.png";
import JAVASCRIPT_LOGO from "../assets/images/tools icons/javascript.png";
import CURSOR_LOGO from "../assets/images/tools icons/cursorai.png";
import GSAP_LOGO from "../assets/images/tools icons/gsap.png";
import FRAMER_LOGO from "../assets/images/tools icons/framer.png";
import PYTHON_LOGO from "../assets/images/tools icons/python.png";
import PANDAS_LOGO from "../assets/images/tools icons/pandas.png";
import NUMPY_LOGO from "../assets/images/tools icons/numpy.png";
import FASTAI_LOGO from "../assets/images/tools icons/fastai.png";
import COLLAB_LOGO from "../assets/images/tools icons/collab.png";
import SCIKIT_LOGO from "../assets/images/tools icons/scikit.png";

export interface dataType {
  name: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  tools: string[];
  route: RelativePathString;
}

export type toolsImagesType = { name: string; image: ImageSourcePropType }[];

export const data: dataType[] = [
  {
    name: "webdev",
    title: "intro to coding with web dev 🌐",
    description:
      "Start building websites with HTML & CSS, the building blocks that power the web. Grow into full-stack coding!",

    image: WebdevGif,
    tools: [
      "html",
      "css",
      "tailwind",
      "javascript",
      "curser.ai",
      `gsap\nanimation`,
      `framer\nmotion`,
    ],
    route: `./(tabs)`,
  },
  {
    name: "python",
    title: "intro to coding with ai python 🤖",
    description:
      "Learn Python basics and dive into AI. Build practical ai apps, get hands-on with ml models and grow into ai engineering!",
    image: PythonGif,
    tools: [
      "python",
      "pandas",
      "numpy",
      "fast.ai",
      "google\ncollab",
      "scikit\n-learn",
    ],
    route: "./(tabs)/python",
  },
];

export const toolsIcons: toolsImagesType = [
  { name: "html", image: HTML_LOGO },
  { name: "css", image: CSS_LOGO },
  { name: "tailwind", image: TAILWIND_LOGO },
  { name: "javascript", image: JAVASCRIPT_LOGO },
  { name: "curser.ai", image: CURSOR_LOGO },
  { name: `gsap\nanimation`, image: GSAP_LOGO },
  { name: `framer\nmotion`, image: FRAMER_LOGO },
  { name: "python", image: PYTHON_LOGO },
  { name: "pandas", image: PANDAS_LOGO },
  { name: "numpy", image: NUMPY_LOGO },
  { name: "fast.ai", image: FASTAI_LOGO },
  { name: "google\ncollab", image: COLLAB_LOGO },
  { name: "scikit\n-learn", image: SCIKIT_LOGO },
];
