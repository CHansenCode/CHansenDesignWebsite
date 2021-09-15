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

_OBS!_

Desktop, mobile & footer navigation follows a pattern of (navConfig.map((link) => link)). This data is fetched from server based on configurations on the cms-template, hence no links will be rendered at first. One can add an array locally or hardcoded in the relevant component with the pattern [{ title: "Link-text", route:"/filename" }].

External social links (github etc) also follows this pattern and contains a third key (f.e type:"github") which matches string precisely to render corresponding react-icon.

# Dependencies

(Outside of Next.js, which is treated as prerequisite)

- axios

For all CRUD towards server.

- react-icons

For footer-bar-icons.

- react-redux & redux-thunk

For redux-store & middleware

- sass

All styles are written in .scss and rendered on build-time

# Styling rules

- /root/styles

style.scss main compiler, also contains the root (html, body, div, header foot main) setup.
\_colors: Site-wide ($primary) var's for setting the color schema.

- /ComponentName/ComponentName.module.scss

Contains component scope styling & media queries.
