import { PROVERBS_DATA } from '../data/proverbs'

// Used to getStaticPaths
export const getAllTags = () => {
  const tags = []
  PROVERBS_DATA.forEach(proverb => {
    proverb.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  }
  )
  return tags
}

// Used to /tags view
export const getRepeatedTags = () => {
  const tags = []
  PROVERBS_DATA.forEach(proverb => {
    proverb.tags.forEach(tag => {
      tags.push(tag)
    })
  }
  )
  return tags
}

// Used to /tags view
export const tagsByFrequency = () => {
  const tags = getRepeatedTags()
  const tagsByFrequency = []
  tags.forEach(tag => {
    const index = tagsByFrequency.findIndex(tagByFrequency => tagByFrequency[0] === tag)
    if (index === -1) {
      tagsByFrequency.push([tag, 1])
    } else {
      tagsByFrequency[index][1]++
    }
  })
  return tagsByFrequency.sort((a, b) => a[0].localeCompare(b[0]))
}
