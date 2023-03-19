import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const breadcrumbNameMap: any = {
  '/Text1': 'Text1',
  '/Text1/Text1_1': 'Text1_1',
  '/Text1/Text1_2': 'Text1_2'
}
const MyBreadcrumb = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  console.log('pathSnippets', pathSnippets)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${ pathSnippets.slice(0, index + 1).join('/') }`
    console.log('breadcrumbNameMap[url]', breadcrumbNameMap[url])
    return {
      key: url,
      title: <Link to={ url }>{ breadcrumbNameMap[url] }</Link>
    }
  })
  console.log('extraBreadcrumbItems', extraBreadcrumbItems)
  console.log('pathSnippets', pathSnippets)
  return (
    <Breadcrumb items={ extraBreadcrumbItems }/>
  )
}

export default MyBreadcrumb