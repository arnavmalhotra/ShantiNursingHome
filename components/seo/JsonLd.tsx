type Props = { data: object | object[] }

export function JsonLd({ data }: Props) {
  const json = JSON.stringify(data)
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
