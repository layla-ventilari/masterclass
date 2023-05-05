"use client"

import { useEffect, useState } from "react"

export async function RepoList() {
  //const [repos, setRepos] = useState([])

 /*  useEffect(() => {
    fetch("https://api.github.com/users/layla-ventilari/repos")
    .then(response => response.json())
    .then(data => setRepos(data))
  }, []) */

  const repos = await fetch('https://api.github.com/users/layla-ventilari/repos', {
  cache: 'force-cache',
  next: {
    revalidate: 20,
  }  
})
  
  .then(response => response.json())
  return(
    <div>
      {JSON.stringify(repos, null, 2)}
    </div>
  )
}