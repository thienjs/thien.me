import type { NextApiRequest, NextApiResponse } from 'next'
const { Octokit } = require('@octokit/rest')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const headers = {
    Authorization: 'Token ' + process.env.GITHUB_AUTH_TOKEN,
  }

  //Followers request
  const followers = await octokit.request(
    '/users/thienjs/followers?per_page=100'
  )
  const followerCount = followers.data.length

  //Last updated request
  const portfolio = await octokit.request('/repos/thienjs/thien.me')
  const portfolioUpdated = portfolio.data.pushed_at

  //Stars request
  const stars = await octokit.request('/users/thienjs/repos')
  const starsCount = stars.data
    .filter((repo) => !repo.fork)
    .reduce((acc, item) => {
      return acc + item.stargazers_count
    }, 0)

  //Repos request
  const reposStarred = await octokit.request(
    '/users/thienjs/starred?per_page=100'
  )
  const starredCount = reposStarred.data.length

  //Orgs request
  const userOrgs = await octokit.request('/user/orgs')
  const orgsCount = userOrgs.data.length

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
  return res.status(200).json({
    stars: starsCount,
    followers: followerCount,
    starred: starredCount,
    orgsCont: orgsCount,
    repos: projectsList,
    portfolioLastUpdated: portfolioUpdated,
  })
}
