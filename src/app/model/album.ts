export interface iAlbum {
  src: string,
  text: string,
  type?: string,
  href?: string
}
export const album: iAlbum[] = [
  {
    src: 'pic1.jpg',
    text: 'Ausstellung „Heilungsarchiven“/ feine Linolschnitte von Andrea Marcos'
  },
  {
    src: 'pic2.png',
    text: 'Ausstellung „Heilungsarchiven“/ Zoya Honarmands Film „yes“ (2014)'
  },
  {
    src: '256x256.jpg',
    text: 'Ausstellung „Heilungsarchiven“/ Olivia Oyama\`s Audioinstallation „Inward Broadcast/affirmations“',
    type: 'pdf',
    href: 'Inward-Broadcast'

  },
  {
    src: 'pic3.jpg',
    text: 'Transformative Justice Kollektiv war mit seinem Zine dabei'
  },
  {
    src: 'pic4.png',
    text: 'whatreallymakesussafe.com wurde präsentiert'
  },
  {
    src: 'pic5.jpg',
    text: 'Das Toolkit wurde auch verteilt'
  },
  {
    src: 'pic6.jpg',
    text: 'Mel & Mai’a im Gespräch'
  },
  {
    src: 'pic7.jpg',
    text: 'Neuen Sammelband von Mai’a'
  }
]
