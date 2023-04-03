import React from 'react'

function Test({id}) {
  return (
    <div>
      Test <br></br>
      Demo for rewrite page 
      {id}
    </div>
  )
}

export default Test

export function getStaticProps() {

  const id = "Test"

  return {
    props: {
      id
    }
  }
}