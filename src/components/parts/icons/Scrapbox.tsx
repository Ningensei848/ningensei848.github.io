import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

// Scrapbox ロゴ - NOTA Press Kit | cf. https://scrapbox.io/nota-press/Scrapbox_ロゴ
const ScrapboxIcon = (props: SvgIconProps) => {
  const scrapboxProps = {
    ...props,
    viewBox: '0 0 114 172',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink'
  }
  return (
    <SvgIcon {...scrapboxProps}>
      <defs>
        <path
          d='M51.9170959,1.07892799 L5.08347657,25.0495363 C2.27594998,26.4864981 -4.26325641e-14,30.2149248 -4.26325641e-14,33.3790227 L-4.26325641e-14,80.272363 C-4.26325641e-14,83.4356496 2.26966483,87.1616708 5.08347657,88.6018494 L53.956126,113.616084 C55.6375273,114.476667 55.6338271,115.873842 53.956126,116.73253 L5.08347657,141.746765 C2.27594998,143.183727 2.26966483,145.510285 5.08347657,146.950464 L51.9170959,170.921072 C54.7246225,172.358034 59.2701917,172.361251 62.083947,170.921072 L108.916626,146.950464 C111.724096,145.513502 114,141.785075 114,138.620977 L114,91.7276371 C114,88.5643505 111.730381,84.8383292 108.916626,83.3981507 L60.0449579,58.3839161 C58.3635903,57.5233332 58.3672903,56.1261587 60.0449579,55.2674696 L108.916626,30.2532352 C111.724096,28.8162734 111.730381,26.489715 108.916626,25.0495363 L62.083947,1.07892799 C59.2764767,-0.358033766 54.7309076,-0.361250665 51.9170959,1.07892799 Z'
          id='path-1'
        ></path>
      </defs>
      <g id='Tile' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Scrapbox' transform='translate(-543.000000, -194.000000)'>
          <g id='S-icon' transform='translate(543.000000, 194.000000)'>
            <g id='sb-icon'>
              <mask id='mask-2' fill='white'>
                <use xlinkHref='#path-1'></use>
              </mask>
              <use id='Mask' fill='#05EC40' xlinkHref='#path-1'></use>
              <polygon
                id='Rectangle'
                fill='#00B52E'
                mask='url(#mask-2)'
                points='57 2.18773733e-14 114 2.18773733e-14 114 172 57 172'
              ></polygon>
              <path
                d='M59,144 L112.745259,116.55092 C114.420089,115.69554 114.416403,114.306714 112.745259,113.453093 L59,86 L59,144 Z'
                id='Mask-Copy'
                fill='#004D3F'
                mask='url(#mask-2)'
                transform='translate(86.500000, 115.000000) scale(-1, 1) translate(-86.500000, -115.000000) '
              ></path>
              <path
                d='M0,85 L53.7452591,57.5509194 C55.4200894,56.6955406 55.4164035,55.3067136 53.7452591,54.4530927 L0,27 L0,85 Z'
                id='Mask'
                fill='#FCFF19'
                mask='url(#mask-2)'
              ></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  )
}

export default ScrapboxIcon
