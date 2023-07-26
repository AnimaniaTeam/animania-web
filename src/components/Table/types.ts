export interface AssociatedsData {
  id: number
  type: string
}

export interface ColumnProps {
  id: number
  value: string
  heading: string
}

export interface AssociatedsProps {
  column: ColumnProps[]
  data: AssociatedsData[] | null
}
