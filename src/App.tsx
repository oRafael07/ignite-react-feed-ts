import { Post } from './components/Post'
import { Header } from './components/Header'
import './global.css'

import css from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Fragment } from 'react'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/oRafael07.png",
      name: "Rafael",
      role: "Back-end Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lucasviga.png",
      name: "Lucas Viga",
      role: "Front-end Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

function App() {

  return (
    <div>

      <Header />

      <div className={css.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Fragment key={post.id}>
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              </Fragment>
            )
          })}
        </main>
      </div>
    </div >
  )
}

export default App
