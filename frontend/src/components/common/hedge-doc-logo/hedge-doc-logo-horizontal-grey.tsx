/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { LogoSize } from './logo-size'
import React from 'react'
import { ShowIf } from '../show-if/show-if'

interface HedgeDocLogoHorizontalGreyProps {
  color: 'dark' | 'light'
  size?: LogoSize | number
  showText?: boolean
  width?: string | number
  className?: string
}

export const HedgeDocLogoHorizontalGrey: React.FC<HedgeDocLogoHorizontalGreyProps> = ({
  color,
  size = LogoSize.MEDIUM,
  showText = true,
  width = 'auto',
  className
}) => {
  return (
    <svg
      clipRule='evenodd'
      fillRule='evenodd'
      height={`${size}px`}
      width={width}
      strokeLinejoin='round'
      strokeMiterlimit='2'
      className={className}
      viewBox={showText ? '0 0 1660.2405 430.07892' : '0 0 430.07892 430.07892'}
      xmlns='http://www.w3.org/2000/svg'>
      <g fillRule='nonzero' transform='translate(10.242436 10.242452)'>
        <path
          d='m0-124.766-6.399 6.398-7.662-4.814-4.812 7.662-8.541-2.989-2.988 8.54-8.993-1.013-1.011 8.991-8.992 1.013 1.012 8.991-8.541 2.989 2.988 8.54-7.661 4.815 4.815 7.662-6.399 6.399 6.398 6.398-4.814 7.661 7.661 4.814-2.988 8.541 8.541 2.988-1.012 8.985 8.992 1.011 1.011 8.985 8.993-1.015 2.988 8.54 8.541-2.988 4.812 7.662 7.662-4.813h12.796l7.661 4.813 4.814-7.66 8.541 2.988 2.988-8.54 8.992 1.014 1.014-8.985 8.99-1.012-1.012-8.985 8.54-2.988-2.988-8.541 7.662-4.815-4.815-7.66 6.398-6.398-6.398-6.399 4.815-7.66-7.662-4.814 2.988-8.542-8.54-2.988 1.014-8.991-8.992-1.015-1.013-8.991-8.991 1.013-2.989-8.54-8.54 2.989-4.814-7.663-7.663 4.815z'
          {...(color === 'light'
            ? { fill: '#333' }
            : { fill: 'none', stroke: '#fff', strokeLinejoin: 'miter', strokeMiterlimit: '2', strokeWidth: '4.4095' })}
          transform='matrix(3.2849556 0 0 3.2849556 207.55664 409.85076)'
        />
        <path
          d='m0-30.513c0-12.366-10.025-22.393-22.392-22.393-6.143 0-11.707 2.476-15.752 6.481l-.003-.002-5.705 5.706-4.665-4.665c-4.104-4.683-10.125-7.642-16.839-7.642-12.367 0-22.392 10.025-22.392 22.391 0 6.463 2.74 12.281 7.118 16.368l36.799 36.784 35.987-36.014c4.496-4.232 7.844-10.203 7.844-17.014'
          fill='#fefefe'
          transform='matrix(3.2849556 0 0 3.2849556 351.53527 341.0132)'
        />
        <path
          d='m-4.558-8.253c1.645 1.64 2.662 3.904 2.662 6.406 0 2.5-1.017 4.766-2.662 6.405-3.514-.026-6.357-2.883-6.357-6.405s2.843-6.38 6.357-6.406'
          transform='matrix(0 -3.2849556 -3.2849556 0 201.44397 379.04995)'
        />
        <path
          d='m-4.896-4.894c-2.704 0-4.895 2.191-4.895 4.894 0 2.704 2.191 4.896 4.895 4.896s4.896-2.192 4.896-4.896c0-2.703-2.192-4.894-4.896-4.894'
          transform='matrix(0 -3.2849556 -3.2849556 0 166.86087 250.80164)'
        />
        <path
          d='m-1.356-1.355c-.751 0-1.356.607-1.356 1.356 0 .748.605 1.355 1.356 1.355.749 0 1.357-.607 1.357-1.355 0-.749-.608-1.356-1.357-1.356'
          fill='#fff'
          transform='matrix(0 -3.2849556 -3.2849556 0 172.96926 261.80315)'
        />
        <path
          d='m-4.896-4.894c-2.704 0-4.895 2.191-4.895 4.896 0 2.703 2.191 4.894 4.895 4.894s4.896-2.191 4.896-4.894c0-2.705-2.192-4.896-4.896-4.896'
          transform='matrix(0 -3.2849556 -3.2849556 0 248.40602 250.80164)'
        />
        <path
          d='m-1.357-1.356c-.751 0-1.356.608-1.356 1.358 0 .748.605 1.355 1.356 1.355.749 0 1.357-.607 1.357-1.355 0-.75-.608-1.358-1.357-1.358'
          fill='#fff'
          transform='matrix(0 -3.2849556 -3.2849556 0 254.51398 261.79888)'
        />
        <ShowIf condition={showText}>
          <path
            d='m914.05273 122.625v70.36133c-4.97999-5.27564-10.96602-9.39883-17.95312-12.375-6.99039-2.97289-14.57179-4.46094-22.74805-4.46094-10.77794 0-20.42618 2.50598-28.9375 7.52539s-15.20529 11.89616-20.07031 20.63086c-4.87159 8.73798-7.30664 18.67703-7.30664 29.82617 0 11.15571 2.43505 21.10062 7.30664 29.83203 4.86502 8.7347 11.55899 15.6095 20.07031 20.62891s18.15956 7.5293 28.9375 7.5293c8.39963 0 16.16843-1.58011 23.30664-4.74024 7.13493-3.16012 13.19251-7.48988 18.17578-12.99219l1.00586 15.50196h16.61133v-167.26758zm-393.29492.002v167.26563h19.51563v-73.5957h95.33984v73.5957h19.51172v-167.26568h-19.51172v75.82813h-95.33984v-75.82813zm724.69919.22071v167.26757h45.4961c32.8594 0 58.0977-7.32308 75.7149-21.9707 17.6172-14.64105 26.4277-35.27334 26.4277-61.88476 0-26.53916-8.8105-47.07674-26.4277-61.60938s-42.8555-21.80273-75.7149-21.80273zm19.5157 17.8457h25.9804c26.4636 0 46.7614 5.70463 60.8867 17.11328 14.1221 11.41522 21.1856 27.56409 21.1856 48.45313 0 20.9613-7.0635 37.20817-21.1856 48.72851-14.1253 11.52363-34.4231 17.28711-60.8867 17.28711h-25.9804zm-248.3301 35.45508c-10.778 0-20.42425 2.50988-28.93557 7.52929-8.51132 5.01942-15.20725 11.89421-20.07226 20.62891-4.87159 8.7347-7.30469 18.6757-7.30469 29.82813 0 11.15242 2.4331 21.09538 7.30469 29.83007 4.86501 8.7347 11.56094 15.61145 20.07226 20.63086 8.51132 5.01942 18.15757 7.52539 28.93557 7.52539 8.1762 0 15.7596-1.48805 22.75-4.46093 6.9871-2.97289 12.9712-7.09608 17.9512-12.375v5.79492c0 15.16664-3.81 27.30097-11.4278 36.41015-7.6244 9.10262-19.3481 13.65625-35.1816 13.65625-6.2447 0-12.04336-1.02121-17.39456-3.06445-5.35447-2.04653-10.11335-4.88956-14.27539-8.5293l-9.14257 15.38672c5.49901 4.08977 11.66853 7.2633 18.50781 9.53321 6.83928 2.2699 14.16041 3.40039 21.96871 3.40039 14.1976 0 26.1478-2.88015 35.8516-8.63867 9.7005-5.76182 17.0402-13.8114 22.0234-24.14258 4.98-10.33447 7.4688-22.37675 7.4688-36.13086v-100.58208h-16.6152l-1.004 15.50195c-4.9799-5.5023-11.0375-9.83206-18.1757-12.99219-7.135-3.16013-14.9051-4.74023-23.3047-4.74023zm591.7656.002c-11.1524 0-21.0973 2.50989-29.832 7.5293-8.7347 5.01612-15.6095 11.89092-20.6289 20.6289-5.0162 8.7347-7.5254 18.67375-7.5254 29.82618 0 11.15242 2.5092 21.09671 7.5254 29.82812 5.0194 8.73798 11.8942 15.61278 20.6289 20.62891 8.7347 5.01941 18.6796 7.52929 29.832 7.52929 8.3996 0 16.1288-1.44899 23.1914-4.34961 7.0627-2.90061 13.1951-6.95092 18.3984-12.15429l-12.8242-12.71094c-3.4952 3.86639-7.6932 6.91014-12.5976 9.14063-4.9078 2.23048-10.2978 3.34765-16.168 3.34765-7.5094 0-14.2007-1.78277-20.0742-5.35351-5.8735-3.56747-10.5026-8.47539-13.8828-14.7168-3.3835-6.2447-5.0723-13.30885-5.0723-21.18945 0-7.95288 1.6888-15.03363 5.0723-21.24219 3.3802-6.20528 8.0093-11.09465 13.8828-14.66211 5.8735-3.57075 12.5648-5.35352 20.0742-5.35352 5.8702 0 11.2602 1.09605 16.168 3.28711 4.9044 2.19435 9.1024 5.25923 12.5976 9.20117l12.8242-12.82421c-5.2033-5.12782-11.3357-9.14236-18.3984-12.04297-7.0626-2.90062-14.7918-4.34766-23.1914-4.34766zm-867.86718.002c-11.00132 0-20.85027 2.494-29.54883 7.47071-8.69856 4.98327-15.53759 11.8057-20.51758 20.46484s-7.47266 18.49149-7.47266 29.49609c0 11.30025 2.65627 21.37042 7.97461 30.2168 5.31178 8.84639 12.65475 15.77942 22.02344 20.79883 9.36541 5.01613 32.11328 7.52539 32.11328 7.52539 7.50941 0 15.29543-1.26551 23.36328-3.79492 8.06457-2.52613 16.14797-7.17049 24.25196-13.9375l-10.81641-13.82617c-5.5023 5.20337-11.59699 8.97814-18.28516 11.32031-6.69474 2.33889-13.04765 3.51172-19.07226 3.51172-10.8535 0-20.12695-3.1801-27.82031-9.53321-7.69337-6.35967-12.46885-14.48142-14.32813-24.36914h94.56055v-7.46875c0-11.22469-2.41783-21.18948-7.25-29.88476-4.83217-8.69856-11.48576-15.53626-19.96094-20.51953-8.47519-4.97671-18.21024-7.47071-29.21484-7.47071zm420.61328 0c-11.0013 0-20.8483 2.494-29.5469 7.47071-8.6985 4.98327-15.5395 11.8057-20.5195 20.46484s-7.4727 18.49149-7.4727 29.49609c0 11.30025 2.6583 21.37042 7.9766 30.2168 5.3118 8.84639 12.6561 15.77942 22.0215 20.79883 9.3654 5.01613 20.0706 7.52539 32.1133 7.52539 7.5094 0 15.2954-1.26551 23.3632-3.79492 8.0646-2.52613 16.15-7.17049 24.254-13.9375l-10.8184-13.82617c-5.5023 5.20337-11.595 8.97814-18.2832 11.32031-6.6915 2.33889-13.0496 3.51172-19.0742 3.51172-10.8535 0-20.125-3.1801-27.8184-9.53321-7.6934-6.35967-12.4708-14.48142-14.3301-24.36914h94.5606v-7.46875c0-11.22469-2.4179-21.18948-7.25-29.88476-4.8322-8.69856-11.4838-15.53626-19.959-20.51953-8.4752-4.97671-18.2122-7.47071-29.2168-7.47071zm311.2109 0c-11.1524 0-21.0914 2.50598-29.8261 7.52539-8.738 5.01942-15.6134 11.89617-20.6329 20.63086-5.0161 8.7347-7.5273 18.67704-7.5273 29.82618 0 11.15242 2.5112 21.09733 7.5273 29.83203 5.0195 8.73469 11.8949 15.60949 20.6329 20.6289 8.7347 5.01942 18.6737 7.52539 29.8261 7.52539 11.1492 0 21.0935-2.50597 29.8282-7.52539 8.7347-5.01941 15.6095-11.89421 20.6289-20.6289 5.0194-8.7347 7.5254-18.67961 7.5254-29.83203 0-11.14914-2.506-21.09148-7.5254-29.82618-5.0194-8.73469-11.8942-15.61144-20.6289-20.63086-8.7347-5.01941-18.679-7.52539-29.8282-7.52539zm-454.0488 16.72251c7.5061 0 14.2001 1.78472 20.0703 5.35547 5.8735 3.56746 10.5026 8.45816 13.8828 14.66015 3.3835 6.20857 5.0743 13.29127 5.0743 21.24415 0 7.8806-1.6908 14.9428-5.0743 21.1875-3.3802 6.2447-8.0093 11.14995-13.8828 14.7207-5.8702 3.56746-12.5642 5.35156-20.0703 5.35156-7.5094 0-14.202-1.7841-20.07226-5.35156-5.8735-3.57075-10.50259-8.476-13.88281-14.7207-3.38679-6.2447-5.07422-13.3069-5.07422-21.1875 0-7.95288 1.68743-15.03558 5.07422-21.24415 3.38022-6.20199 8.00931-11.09269 13.88281-14.66015 5.87026-3.57075 12.56286-5.35547 20.07226-5.35547zm-143.29296.002c7.50941 0 14.20009 1.7841 20.07031 5.35157 5.8735 3.57074 10.50321 8.45878 13.88672 14.66406 3.38022 6.20856 5.07226 13.29064 5.07226 21.24023 0 7.88061-1.69204 14.94476-5.07226 21.18946-3.38351 6.2447-8.01322 11.15128-13.88672 14.71875-5.87022 3.57074-12.5609 5.35546-20.07031 5.35546s-14.2001-1.78472-20.07032-5.35546c-5.8735-3.56747-10.50259-8.47405-13.88281-14.71875-3.3835-6.2447-5.07617-13.30885-5.07617-21.18946 0-7.94959 1.69267-15.03167 5.07617-21.24023 3.38022-6.20528 8.00931-11.09332 13.88281-14.66406 5.87022-3.56747 12.56091-5.35157 20.07032-5.35157zm-134.5918.002c9.73661 0 17.98823 3.06487 24.75195 9.20117 6.76373 6.13301 10.96566 14.06675 12.60157 23.80664h-75.60352c1.63591-9.58879 5.94845-17.4887 12.93555-23.69727 6.9871-6.20528 15.42673-9.31054 25.31445-9.31054zm420.61526 0c9.7366 0 17.9882 3.06487 24.7519 9.20117 6.7638 6.13301 10.9657 14.06675 12.6016 23.80664h-75.6035c1.6359-9.58879 5.9484-17.4887 12.9355-23.69727 6.9871-6.20528 15.4268-9.31054 25.3145-9.31054zm311.3183 0c7.5062 0 14.2021 1.78081 20.0723 5.35156 5.8735 3.57075 10.5013 8.45878 13.8848 14.66406 3.3802 6.20528 5.0722 13.28736 5.0722 21.24024 0 7.8806-1.692 14.94475-5.0722 21.18945-3.3835 6.2447-8.0113 11.148-13.8848 14.71875-5.8702 3.56746-12.5661 5.35156-20.0723 5.35156-7.5094 0-14.2001-1.7841-20.0703-5.35156-5.8735-3.57075-10.5026-8.47405-13.8828-14.71875-3.3868-6.2447-5.0742-13.30885-5.0742-21.18945 0-7.95288 1.6874-15.03496 5.0742-21.24024 3.3802-6.20528 8.0093-11.09331 13.8828-14.66406 5.8702-3.57075 12.5609-5.35156 20.0703-5.35156z'
            fill={color === 'light' ? '#333' : '#fff'}
            strokeWidth='3.28496'
          />
        </ShowIf>
      </g>
    </svg>
  )
}
