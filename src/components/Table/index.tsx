import * as S from './styles'
import * as C from '@chakra-ui/react'

import { ColumnProps, AssociatedsData, AssociatedsProps } from './types'

export function Table({ data, column }: AssociatedsProps) {
  return (
    <S.TableContainer>
      <S.Table>
        <S.THead>
          <S.TRow>
            {column.map((item: ColumnProps) => (
              <S.THeadColumn key={item?.id} className={item?.value}>
                {item?.heading}
              </S.THeadColumn>
            ))}
          </S.TRow>
        </S.THead>

        <S.TBody>
          {data &&
            data.map((item: AssociatedsData) => (
              <S.TRow key={item?.id}>
                {column.map((itemColumn: ColumnProps) => (
                  <S.TBodyColumn
                    key={itemColumn.value}
                    className={itemColumn?.value}
                  >
                    <C.Text as="span">
                      {item[itemColumn.value as keyof AssociatedsData]}
                    </C.Text>
                  </S.TBodyColumn>
                ))}
              </S.TRow>
            ))}
        </S.TBody>
      </S.Table>
    </S.TableContainer>
  )
}
