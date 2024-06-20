import React from 'react'

export default function Alert(props) {
  return (
    props.aalert && <div class={`alert alert-${props.aalert.type} alert-dismissible fade show`} role="alert">
  {props.aalert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
