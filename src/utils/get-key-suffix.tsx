export default function getKeySuffix(keyType: string) {
  switch (keyType) {
    case 'Minor': {
      return 'm'
    }
    default: {
      return ''
    }
  }
}
