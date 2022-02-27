import { createElement } from 'react'
import PropTypes from 'prop-types'

const index = (props) => {
  const { color, size, ...otherProps } = props
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 300 300',
      ...otherProps,
    },
    createElement('path', {
      fill: color,
      d: 'm1877 2568c-183-227-346-430-362-451-32-40-64-54-88-40-8 4-33 31-54 58-29 37-54 90-93 200-50 140-57 154-111 213-33 34-87 104-120 155-77 116-79 118-69 71 7-29 4-59-11-119-12-44-22-81-23-83-2-1-35 16-73 38-55 31-74 48-88 79-11 26-36 52-71 77-30 20-56 35-58 33s-7-45-12-95c-7-68-6-99 3-120 7-16 12-46 13-66 0-47 98-295 185-468 79-158 163-365 175-434 5-28 17-74 27-103 17-52 17-52-11-123-15-39-44-89-63-112s-41-54-49-69c-20-39-71-114-86-127-7-5-26-12-43-14-26-3-32-10-56-73-15-38-72-144-128-235l-101-165 40-40 40-41-20-160c-11-87-20-164-20-171s13-9 39-6c34 5 40 2 61-27 14-19 25-53 28-81s10-49 16-49c7 0 40 9 74 21 70 23 47-7 197 269 138 253 207 355 329 486 71 77 80 77 114 5 11-23 32-44 57-57 39-20 40-23 62-115 12-52 25-104 28-115 4-20 182-170 191-162 2 2-4 46-12 96-9 51-14 98-11 106 6 15 59 28 81 20 7-3 27-24 44-47 20-28 53-54 97-77 78-41 85-37 85 56 0 64 11 84 45 84 16 0 26-10 37-38 13-34 20-39 76-55 34-9 66-17 71-17s14 30 20 66c13 73 18 61-70 191-26 38-70 114-97 169-63 124-84 153-149 203-42 33-53 48-58 78-3 21-8 47-10 58s-36 69-75 128c-63 98-70 113-70 159 0 47 4 55 48 102 27 28 68 89 93 136 53 103 183 298 293 440 118 152 124 161 219 315 79 126 87 145 87 189v49l-77-75c-49-47-92-80-117-88-37-12-39-11-62 16-27 32-27 31 3 226 13 88 14 110 3 122-7 9-16 16-21 16-4 0-158-186-342-412z',
      transform: 'matrix(.1 0 0 -.1 0 300)',
    }),
  )
}

index.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

index.defaultProps = {
  color: '#d52128',
  size: '30',
}

export default index
