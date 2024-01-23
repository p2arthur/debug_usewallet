import { fileroom } from '@/functions/fileroom/client'

export interface Media {
  cid: string
  mimeType: string
  previews: Array<{
    size: number
    cid: string
    mimeType: string
  }>
}

/**
 * Converts a Media object or ipfs cid into just a cid. When passed a Media object, it will, by default, pick the original media cid. When given a preferred size, it will pick the closed preview to the given size, and fallback to the original if no previews are avaialbalbe.
 * 
 * @param source
 * @param preferredSize
 */
export function resolveCid(source: string | Media, preferredSize?: number) {

  if (typeof source === 'string') {

    return `${fileroom.api}/ipfs/` + source
  } else {
    const media = source as Media

    if (preferredSize && media.previews && media.previews.length > 0) {
      const preffered = media.previews.find((preview) => preferredSize === preview.size)

      if (preffered) {
        // return `${fileroom.api}/ipfs/` + preffered.cid
        return `${fileroom.cdn}/${preffered.cid}.${extension(preffered.mimeType)}`
      }

      const closest = media.previews.reduce((prev, curr) => {
        // return (Math.abs(curr.size - preferredSize) < Math.abs(prev.size - preferredSize) ? curr : prev)
        return (Math.abs(curr.size - preferredSize) < Math.abs(prev.size - preferredSize) ? curr : prev)
      })

      if (closest) {
        // return `${fileroom.api}/ipfs/` + closest.cid
        return `${fileroom.cdn}/${closest.cid}.${extension(closest.mimeType)}`
      }

      return `${fileroom.api}/ipfs/` + media.cid
    } else {
      return `${fileroom.api}/ipfs/` + media.cid
    }
  }
}

/**
 * Resolves a given cid to the arc3 or arc69 media link.
 * 
 * @param source
 */
export async function resolveMetaData (source: string) {

  const response = await fetch(`${fileroom.api}/ipfs/${source}`)
  let responseData

  try {
    responseData = await response.json()
  } catch (err) {
    return source
  }


  if (!responseData.image) {
    return ''
  }

  if (typeof responseData.image !== 'string') {
    return ''
  }

  if (!responseData.image.match('ipfs://')) {
    return ''
  }

  return responseData.image.replace('ipfs://', '')
}

/**
 * Converts a Media object into a cdn link.
 * 
 * @param source
 * @param preferredSize
 */
export function resolveMediaToCDN(source: Media | null | undefined, preferredSize?: number) {

  if (!source) {
    return 'https://v2.dartroom.xyz/favicon.svg'
  }

  const media = source as Media

  if (preferredSize && media.previews && media.previews.length > 0) {
    const preffered = media.previews.find((preview) => preferredSize === preview.size)
    
    if (preffered) {
      return `${fileroom.cdn}/${preffered.cid}.${extension(preffered.mimeType)}`
    }

    const closest = media.previews.reduce((prev, curr) => {
      return (Math.abs(curr.size - preferredSize) < Math.abs(prev.size - preferredSize) ? curr : prev)
    })

    if (closest) {
      return `${fileroom.cdn}/${closest.cid}.${extension(closest.mimeType)}`
    }

    return `${fileroom.cdn}/${media.cid}.${extension(media.mimeType)}`
  } else {
    return `${fileroom.cdn}/${media.cid}.${extension(media.mimeType)}`
  }
}

function extension (mimeType: string) {
  const extension = mimeType.split(/[\/+]+/)

  if (extension.length < 2) {
    return false
  }

  return extension[1]
}