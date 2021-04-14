import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { Button } from 'antd'


export default function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Build Nextjs Projects with Ant Design </h1>
     <Button type="primary"> Start Coding Nextjs</Button>
     
    </div>
  )
}
