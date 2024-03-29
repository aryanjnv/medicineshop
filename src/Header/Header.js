import React, { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Medicine Shop</h1>
            <HeaderCartButton/>
        </header>
    </Fragment>
  )
}

export default Header