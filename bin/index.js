#!/usr/bin/env node

const { execSync } = require('child_process')
const path = require('path')

const projectName = process.argv[2] || 'next-14-ts-team-project'
const repoUrl = 'https://github.com/kimpuro/next-14-ts-team-boilerplate.git'

console.log(`🚀 프로젝트를 생성 중입니다: ${projectName}`)

try {
  execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' })

  const projectPath = path.join(process.cwd(), projectName)
  execSync(`rm -rf ${path.join(projectPath, '.git')}`, { stdio: 'inherit' })

  console.log('✅ 프로젝트가 성공적으로 생성되었습니다!')
  console.log(`👉 cd ${projectName} && npm install`)
} catch (error) {
  console.error('❌ 프로젝트 생성 중 오류가 발생했습니다:', error)
}
