import React, { useState, useEffect } from 'react'
import { Container, Text } from '../../design-systems'

import styled from 'styled-components'

const Badge = styled(Text)`
  position: absolute;
  right: 0;
  top: 0;
`

function Webtoons() {
  useEffect(() => {
    const response = [
      {
        title: '여신강림',
        src:
          'https://shared-comic.pstatic.net/thumb/webtoon/703846/thumbnail/thumbnail_IMAG10_35503130-16ce-4236-b913-0fe76226de36.jpg',
        updated: true, // 뱃지 컴포넌트
      },
      {
        title: '약한영웅',
        src:
          'https://shared-comic.pstatic.net/thumb/webtoon/710751/thumbnail/thumbnail_IMAG10_eed99ea4-5908-4445-b89a-d3881797f909.jpg',
        updated: true,
      },
      {
        title: '외모지상주의',
        src:
          'https://shared-comic.pstatic.net/thumb/webtoon/641253/thumbnail/title_thumbnail_20141120112141_t83x90.jpg',
        updated: false,
      },
    ]

    setWebtoons(response)
  }, [])

  const [webtoons, setWebtoons] = useState(null)

  if (!webtoons) {
    return null
  }

  return (
    <Container>
      {webtoons.map(({ title, src, updated }, idx) => (
        <Container key={idx}>
          <Container position="relative" display="inline-block">
            <img src={src} />
            <Text color="orange">{title}</Text>
            {updated ? <Badge color="blue">UP</Badge> : null}
          </Container>
        </Container>
      ))}
    </Container>
  )
}

export default Webtoons
