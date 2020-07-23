import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string,
    colors: {
      primary: string,
      secundary: string,

      header_bg: string,

      navigation_disabled: string,

      input_bg: string,

      background: string,
      text: string,
      textSecundary: string,

      card_bg_primary: string,
      card_bg_secondary: string,
      card_border_primary: string,

      transactions_bg: string,
      transactions_title: string,
      transactions_income: string,
      transactions_outcome: string,
    }
  }
}
