export type RefundItemProps = {
  id: string
  name: string
  category: string
  value: string
  categoryImg: string
}

type Props = React.ComponentProps<'a'> & {
  data: RefundItemProps
}

export function RefundItem({ ...rest }: Props) {
  return <a {...rest}>Teste</a>
}
