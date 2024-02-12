'use client'
import React from 'react'
import { IMaskInput } from 'react-imask'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const textMaskCustom = (mask: string) =>
  React.forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, ...other } = props
      return (
        <IMaskInput
          {...other}
          mask={mask}
          definitions={{
            '#': /[1-9]/,
          }}
          inputRef={ref}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onAccept={(value: any) =>
            onChange({ target: { name: props.name, value } })
          }
          overwrite
        />
      )
    },
  )
export default textMaskCustom
