import { CSSProperties } from 'react'

const svgStyleProps: CSSProperties = {
  stroke: 'rgb(0,0,0)',
  strokeWidth: Math.sqrt(2), // (0, 7]
  strokeDasharray: 'none',
  strokeLinecap: 'butt',
  strokeDashoffset: 0,
  strokeLinejoin: 'miter',
  strokeMiterlimit: 4,
  fill: 'rgb(255,255,255)',
  fillOpacity: 0,
  fillRule: 'nonzero',
  opacity: 1
}

const Nono4rsibus = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      // width='1280'
      // height='640'
      viewBox='0 0 1280 640'
      xmlSpace='preserve'
    >
      <g transform='matrix(1 0 0 1 640 320)' id='backgroundColor'>
        <path
          style={{
            ...svgStyleProps,
            stroke: 'rgb(56,116,229)',
            strokeWidth: 0,
            fill: 'rgb(248,250,248)'
          }}
          vectorEffect='non-scaling-stroke'
          transform=' translate(0, 0)'
          d='M -141 -141 L 141 -141 L 141 141 L -141 141 z'
          strokeLinecap='round'
        />
      </g>
      <g transform='matrix(1 0 0 1 640 330)' id='pathGrouping'>
        <g vectorEffect='non-scaling-stroke'>
          <g transform='matrix(1 0 0 1 -320 -160)' id='large_n'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -180 90 L 0 -90 L 0 90 L 180 -90'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 -195 -145)' id='first_o_upper_right'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -25 -25 L 25 25'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 115 20)' id='lightning_center_line'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -385 -140 L -335 -90 L -235 -190 L -235 -90 L -135 -190 L -85 -140 L -355 130 L 385 130 L 325 190'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 -45 -95)' id='second_o_lower_left'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -25 -25 L 25 25'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 -120 140)' id='verticalbar_4'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M 0 -110 L 0 110'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 -30 160)' id='small_r'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -50 -50 L -50 50 L 50 -50 L 50 -10'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 90 180)' id='first_s_tail'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M 30 -30 L -30 30'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 60 130)' id='first_s_horn'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -20 20 L 20 -20'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 150 160)' id='small_i'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -50 50 L 50 -50'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 240 110)' id='small_b'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M 0 0 L 0 100 L -100 100 L 100 -100'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 340 160)' id='small_u'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M 20 -50 L -80 50 L -20 50 L 80 -50'
              strokeLinecap='round'
            />
          </g>
          <g transform='matrix(1 0 0 1 440 130)' id='second_s_horn'>
            <path
              style={svgStyleProps}
              vectorEffect='non-scaling-stroke'
              transform=' translate(0, 0)'
              d='M -20 20 L 20 -20'
              strokeLinecap='round'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Nono4rsibus
