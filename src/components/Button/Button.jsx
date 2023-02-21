import React from 'react'
import { Link } from "react-router-dom";

export default function Button({url,bgColor,color,content}) {
  return (
    <Link to={url}><button className={`${bgColor} ${color} m-2` }>{content}</button></Link>
  )
}
