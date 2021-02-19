import React, { ReactElement } from "react"

export const Footer = (): ReactElement => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()} Roberts Ivanovs
    </footer>
  )
}
