import React from 'react'
import { Link } from "react-router-dom";

export default function Button({url,color,content}) {
  return (
    <Link className={color} to={url}><button>{content}</button></Link>
  )
}
