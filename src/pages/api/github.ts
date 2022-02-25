import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const headers = {
    Authorization: 'Token ' + process.env.GITHUB_AUTH_TOKEN,
  }

  // projects
  const url = 'https://api.github.com/users/thienjs/repos?per_page=10'
  const response = await fetch(url, { headers: headers })
  const json = await response.json()
  const projectsList = []

  json.forEach((p) => {
    projectsList.push({
      name: p.name,
      stars: p.stargazers_count,
      pushed: p.pushed_at,
      url: p.html_url,
      description: p.description,
      language: p.language,
    })
  })

  //return
}
