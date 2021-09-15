# Introduction

This is the front-side in a MERN stack frontside application stack built on the Next.js framework. It's built on the idea of both fetching data at build-time, and some function that fetches data from an express server Live.

This is the work of a junior Front-End student and you are more then welcome to leave comments & critique to further the project.

# Getting Started

### install

- npm install

### run

- npm run dev

Opens up in localhost:3000

## build

- npm run build

(npm build && npm export)
Creates an export for upload in folder 'out'

# How to use

**OBS!**

Desktop, mobile & footer navigation follows a pattern of (navConfig.map((link) => link)). This data is fetched from server based on configurations on the cms-template, hence no links will be rendered at first. One can add an array locally or hardcoded in the relevant component with the pattern [{ title: "Link-text", route:"/filename" }].

External social links (github etc) also follows this pattern and contains a third key (f.e type:"github") which matches string precisely to render corresponding react-icon.

# Dependencies

(Outside of Next.js, which is treated as prerequisite)

- axios
- react-icons
- react-redux
- redux-thunk
- sass

# Styling rules

All styles are written in .scss and rendered on build-time

### '/styles'

_only files containing variables to change are listed_

- style.scss: @import font, @import "\_colors" etc, document body setup & media queries

- \_colors: color schema ($primary etc..)
- \_fonts: Font schema ($font, h1,h2,h3,h4,h5,h6,p settings)
- \_transitions: Transition schema (html \* {} followed by specific elements)

### '/ComponentName/ComponentName.module.scss'

component scope styling
