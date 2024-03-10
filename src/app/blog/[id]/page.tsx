import React from 'react'
import styles from '../../page.module.css'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BlogList from '@/app/components/BlogList'
import { notFound } from 'next/navigation'


const style = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
}
export default function page({ params }: { params: { id: number } }) {
  return params.id < 1 || params.id > 10 ? notFound() : (
    <main className={styles.main}>
      <Header />
      <div style={style}>
        <BlogList />
        <div style={{textAlign: 'center' }}>
            <h2>Welcome to the blog number: {params.id}</h2>
            <Link href={`/blog/${params.id}/image`}>View image</Link>
        </div>  
      </div>   
      <Footer />
    </main>
  )
}