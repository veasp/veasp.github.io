import React, { ReactElement } from "react"

import * as style from "./footer.module.scss"

export const Footer = (): ReactElement => {
  return (
    <footer className={style.footer}>
      © {new Date().getFullYear()} Roberts Ivanovs
    </footer>
  )
}
